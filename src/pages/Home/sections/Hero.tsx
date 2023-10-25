import React from "react";
import { Hero as HeroComponent } from "../../../components";

const data = {
  title: {
    first_line: "Welcome to",
    last_line: "Your Perfect Getaway!",
  },
  message: `Are you looking for your dream vacation rental? Whether it's a cozy apartment in the heart of the city, a spacious family house in a tranquil suburb, a luxurious beachfront condominium, or a private resort nestled in paradise – you've come to the right place!`,
  image: `/modern-studio-apartment-design-with-bedroom-living-space.jpg`,
  image_owner: {
    url: "https://www.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_2448708.htm#query=appartment&position=9&from_view=search&track=sph",
    name: "katemangostar",
  },
};

export const Hero: React.FC = () => {
  return <HeroComponent data={data} image_position="right" />;
};
