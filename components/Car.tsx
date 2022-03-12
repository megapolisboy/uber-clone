import tw from "tailwind-styled-components";

const Car: React.FC = () => {
  return (
    <Wrap>
      <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
      <CarDetails>
        <Service>UberX</Service>
        <Time>5 min away</Time>
      </CarDetails>
      <Price>$24.00</Price>
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
