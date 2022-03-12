import tw from "tailwind-styled-components";
import Car from "./Car";

const RideSelector: React.FC = () => {
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        <Car />
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
    flex-1
`;

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`;

const CarList = tw.div``;
