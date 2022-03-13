import tw from "tailwind-styled-components";
import Car from "./Car";
import { carList } from "../utils/carList";
import { useEffect, useState } from "react";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string;

interface RideSelectorProps {
  pickupCoordinates: number[];
  dropoffCoordinates: number[];
}

interface CarProps {
  imgUrl: string;
  service: string;
  multiplier: number;
}

const RideSelector: React.FC<RideSelectorProps> = ({
  pickupCoordinates,
  dropoffCoordinates,
}) => {
  const [rideDurarion, setRideDuration] = useState<number>(0);

  useEffect(() => {
    if (
      pickupCoordinates[0] &&
      pickupCoordinates[1] &&
      dropoffCoordinates[0] &&
      dropoffCoordinates[1]
    )
      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` +
          new URLSearchParams({
            access_token: ACCESS_TOKEN,
          })
      )
        .then((response: any) => response.json())
        .then((data: any) => setRideDuration(data.routes[0].duration / 100));
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car: CarProps) => (
          <Car
            key={car.multiplier * 10.5}
            {...car}
            rideDuration={rideDurarion}
          />
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
  flex-1 h-1/2 flex flex-col
`;

const Title = tw.div`
  text-gray-500 text-center text-xs py-2 border-b
`;

const CarList = tw.div`
  overflow-y-scroll scrollbar-hide
`;
