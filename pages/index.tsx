import type { NextPage } from "next";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Vova Kovalov</Name>
            <UserImage src="images\person.jpg" />
          </Profile>
        </Header>
        {/* ActionButtons */}
        <ActionButtons>
          <Link href="/search">
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
  h-12 w-12 rounded-full border border-gray-200 p-px
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
