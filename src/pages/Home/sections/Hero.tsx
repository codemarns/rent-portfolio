import React from "react";
import { Button } from "../../../components";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative h-[810px] w-full max-w-[1920px] mx-auto px-8 py-24 bg-warning bg-[url('/modern-studio-apartment-design-with-bedroom-living-space.jpg')] bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:backdrop-blur-md before:bg-white/50"
    >
      <div
        className={`relative h-full w-full max-w-[1440px] mx-auto grid grid-cols-2 gap-16`}
      >
        <div className="flex items-center">
          <div className="space-y-12">
            <h1 className="space-y-4 font-bold text-left tracking-wide">
              <span className="block text-3xl">Welcome to</span>
              <span className="block text-5xl">Your Perfect Getaway!</span>
            </h1>
            <p className="text-xl">
              Are you looking for your dream vacation rental? Whether it's a
              cozy apartment in the heart of the city, a spacious family house
              in a tranquil suburb, a luxurious beachfront condominium, or a
              private resort nestled in paradise – you've come to the right
              place!
            </p>
            <Button
              size="xl"
              color="warning"
              corner="rounded"
              label="Rent Now"
              iconPosition="right"
              iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              className="hover:gap-4"
            />
          </div>
        </div>
        <div className="relative bg-warning-400 rounded-xl bg-[url('/modern-studio-apartment-design-with-bedroom-living-space.jpg')] bg-no-repeat bg-cover bg-center">
          <p className="absolute bottom-1 right-1 text-white/10">
            <a href="https://www.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_2448708.htm#query=appartment&position=9&from_view=search&track=sph">
              Image by katemangostar
            </a>{" "}
            on Freepik
          </p>
        </div>
      </div>
    </section>
  );
};
