import { GetServerSideProps, NextPage } from "next";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RideSelector from "../components/RideSelector";
import Link from "next/link";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string;

type CoordinateType = "pickup" | "dropoff";

interface NextPageProps {
  pickupCoordinates: number[];
  dropoffCoordinates: number[];
}

const Confirm: NextPage<NextPageProps> = ({
  pickupCoordinates,
  dropoffCoordinates,
}) => {
  const router = useRouter();
  console.log(pickupCoordinates, dropoffCoordinates);

  return (
    <Wrapper>
      <Head>
        <title>Confirm ride</title>
      </Head>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <ButtonContainer>
        <Link href="/search" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const getCoordinates = async (type: CoordinateType, location: string) => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
        new URLSearchParams({
          access_token: ACCESS_TOKEN,
          limit: "1",
        })
    );
    const data = await response.json();

    return data.features[0].center;
  };

  const pickup = context.query.pickup as string;
  const dropoff = context.query.dropoff as string;

  const pickupCoordinates: number[] = await getCoordinates("pickup", pickup);
  const dropoffCoordinates: number[] = await getCoordinates("pickup", dropoff);
  return {
    props: {
      pickupCoordinates,
      dropoffCoordinates,
    },
  };
};

const Wrapper = tw.div`
    flex flex-col h-screen
`;

const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
    flex justify-center item-center
`;

const ConfirmButton = tw.button`
  bg-black text-white my-4 mx-4 py-4 text-center text-xl w-full
`;

const ButtonContainer = tw.div`
  bg-white px-4 py-2 absolute bg-red-500 bg-transparent
`;

const BackButton = tw.img`
  h-10 cursor-pointer rounded-full bg-white shadow-md 
`;
