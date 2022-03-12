import tw from "tailwind-styled-components";
//@ts-ignore
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string;

mapboxgl.accessToken = ACCESS_TOKEN;

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      zoom: 3,
      center: [-99.29011, 39.39172],
    });

    addToMap(map);
  }, []);

  const addToMap = (map: any) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat([12.554729, 55.70651])
      .addTo(map);
  };

  return <Wrapper id="map">Map</Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex-1 
`;
