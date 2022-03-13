import type { NextPage } from "next";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import Link from "next/link";
import Head from "next/head";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

interface User {
  name: string | null;
  photoUrl: string | null;
}

const Home: NextPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Uber Clone</title>
      </Head>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user?.name}</Name>
            <UserImage
              src={user?.photoUrl || ""}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        {/* ActionButtons */}
        <ActionButtons>
          <Link href="/search" passHref>
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            2-Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
};

export default Home;

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 px-4
`;

const Header = tw.header`
  flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center
`;

const Name = tw.div`
  mr-4 w-20 text-sm
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`;

const ActionButtons = tw.div`
  flex
`;

const ActionButton = tw.div`
  bg-gray-200 flex-1 m-1 h-32 flex flex-col justify-center items-center cursor-pointer rounded-lg
  transition transition-duration-100 transform hover:scale-105 text-xl
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-xl p-4 flex items-center justify-left mt-5 cursor-pointer
`;
