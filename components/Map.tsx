import tw from "tailwind-styled-components";
//@ts-ignore
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string;

mapboxgl.accessToken = ACCESS_TOKEN;

interface MapProps {
  pickupCoordinates: number[];
  dropoffCoordinates: number[];
}

const Map: React.FC<MapProps> = ({ pickupCoordinates, dropoffCoordinates }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      zoom: 3,
      center: [-99.29011, 39.39172],
    });
    if (pickupCoordinates?.length) {
      addToMap(pickupCoordinates, map);
    }
    if (dropoffCoordinates?.length) {
      addToMap(dropoffCoordinates, map);
    }

    if (pickupCoordinates?.length && dropoffCoordinates?.length) {
      map.fitBounds([pickupCoordinates, dropoffCoordinates], {
        padding: 60,
      });
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (coordinates: number[], map: any) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map">Map</Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex-1 
`;
