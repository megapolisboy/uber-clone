import tw from "tailwind-styled-components";
//@ts-ignore
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwY29kZXIiLCJhIjoiY2wwbWpsbW05MHE4cDNicGUyMzliMmk5diJ9.0WmcLprpUi-zr9_5C_YKig";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      zoom: 3,
      center: [-99.29011, 39.39172],
    });
  }, []);

  return <Wrapper id="map">Map</Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex-1 
`;
