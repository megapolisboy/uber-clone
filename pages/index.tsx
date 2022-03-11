import type { NextPage } from "next";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import Map from "../components/Map";

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

        {/* InputButton */}
      </ActionItems>
    </Wrapper>
  );
};

export default Home;

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1
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
