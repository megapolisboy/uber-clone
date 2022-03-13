import { NextPage } from "next";
import tw from "tailwind-styled-components";
import Router, { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import Head from "next/head";
import { useEffect } from "react";

const Login: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Sign in to Uber</title>
      </Head>

      <UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.png" />
      <Title>Log in to access your account</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
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
  h-20 w-auto object-contain self-start
`;

const Title = tw.div`
    text-5xl pt-4 text-gray-500
`;

const HeadImage = tw.img`
    object-contain w-full md:w-[780px]
`;
