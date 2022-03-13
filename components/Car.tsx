import { LargeNumberLike } from "crypto";
import tw from "tailwind-styled-components";

interface CarProps {
  imgUrl: string;
  service: string;
  multiplier: number;
  rideDuration: number;
}

const Car: React.FC<CarProps> = ({
  imgUrl,
  service,
  multiplier,
  rideDuration,
}) => {
  return (
    <Wrap>
      <CarImage src={imgUrl} />
      <CarDetails>
        <Service>{service}</Service>
        <Time>5 min away</Time>
      </CarDetails>
      <Price>${(rideDuration * multiplier).toFixed(2)}</Price>
    </Wrap>
  );
};
export default Car;

const Wrap = tw.div`
    flex items-center p-4
`;

const CarImage = tw.img`
    h-14 mr-4
`;

const CarDetails = tw.div`
    flex-1
`;

const Service = tw.div`
    font-bold
`;

const Time = tw.div`
    text-xs text-blue-500
`;

const Price = tw.div`
    text-sm font-medium
`;
