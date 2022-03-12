import { NextPage } from "next";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface FormData {
  pickup: string;
  dropoff: string;
}

const Search: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    router.push({
      pathname: "/confirm",
      query: {
        pickup: data.pickup,
        dropoff: data.dropoff,
      },
    });
  });

  return (
    <Wrapper onSubmit={onSubmit}>
      <Head>
        <title>Search ride</title>
      </Head>
      <ButtonContainer>
        <Link href="/" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle />
          <VerticalLine />
          <Square />
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="Enter pickup location"
            {...register("pickup", { required: true })}
          />
          <Input
            placeholder="Where to?"
            {...register("dropoff", { required: true })}
          />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/windows/32/ffffff/filled-star.png" />
        Saved Places
      </SavedPlaces>
      <ConfirmLocation>
        <ConfirmLocationButton type="submit">
          Confirm Locations
        </ConfirmLocationButton>
      </ConfirmLocation>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.form`
  bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
  bg-white px-4
`;

const BackButton = tw.img`
  h-12 cursor-pointer
`;

const InputContainer = tw.div`
  bg-white flex items-center px-4 pb-2 mb-2
`;

const FromToIcons = tw.div`
  w-10 flex flex-col justify-center items-center gap-0.5 mr-2
`;

const Circle = tw.div`
  w-2.5 h-2.5 rounded-full bg-gray-400
`;

const VerticalLine = tw.div`
  h-10 w-px bg-gray-400
`;

const Square = tw.div`
  w-2.5 h-2.5 bg-black
`;

const InputBoxes = tw.div`
  flex flex-col flex-1 
`;

const Input = tw.input`
  h-10 bg-gray-200 my-2 rounded-2 p-2 border-none outline-none
`;

const PlusIcon = tw.img`
  w-10 h-10 bg-gray-200 rounded-full ml-3 
`;

const SavedPlaces = tw.div`
  flex items-center bg-white px-4 py-2
`;

const StarIcon = tw.img`
  bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;

const ConfirmLocation = tw.div`
  flex items-center justify-center
`;
const ConfirmLocationButton = tw.button`
  bg-black text-white w-full mx-4 px-4 py-3 text-2xl mt-2
`;
