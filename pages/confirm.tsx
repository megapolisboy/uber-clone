import { NextPage } from "next";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RideSelector from "../components/RideSelector";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string;

type CoordinateType = "pickup" | "dropoff";

const Confirm: NextPage = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  const [pickupCoordinates, setPickupCoordinates] = useState<number[]>([]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState<number[]>([]);

  const getCoordinates = (type: CoordinateType, location: string) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
        new URLSearchParams({
          access_token: ACCESS_TOKEN,
          limit: "1",
        })
    )
      .then((response) => response.json())
      .then((data: any) => {
        if (type === "pickup") {
          setPickupCoordinates(data.features[0].center);
        } else {
          setDropoffCoordinates(data.features[0].center);
        }
      });
  };

  useEffect(() => {
    getCoordinates("pickup", pickup! as string);
    getCoordinates("dropoff", dropoff! as string);
  }, [dropoff, pickup]);

  return (
    <Wrapper>
      <Head>
        <title>Confirm ride</title>
      </Head>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
    flex flex-col h-screen
`;

const RideContainer = tw.div`
    flex-1 flex flex-col
`;

const ConfirmButtonContainer = tw.div`
    flex justify-center item-center
`;

const ConfirmButton = tw.button`
  bg-black text-white my-4 mx-4 py-4 text-center text-xl w-full
`;
