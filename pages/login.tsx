import { NextPage } from "next";
import tw from "tailwind-styled-components";

const Login: NextPage = () => {
  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
      <SignInButton>Sign in with Google</SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-gray-200 p-4
`;

const SignInButton = tw.button`
    bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer
`;

const UberLogo = tw.img`
  h-28
`;
