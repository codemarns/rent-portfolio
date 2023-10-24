import React from "react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative h-auto] w-full max-w-[1920px] mx-auto p-8 bg-warning bg-[url('/modern-studio-apartment-design-with-bedroom-living-space.jpg')] bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:backdrop-blur-md before:bg-white/50"
    >
      <div
        className={`relative h-[810px] w-full max-w-[1440px] mx-auto p-8 flex items-center justify-center bg-warning-400 rounded-xl bg-[url('/modern-studio-apartment-design-with-bedroom-living-space.jpg')] bg-no-repeat bg-cover bg-center`}
      >
        <div className="relative flex flex-col items-center justify-center gap-16">
          <h1
            className="space-y-4 text-white text-7xl font-bold text-center tracking-wide drop-shadow-[1px_3px_0px_rgb(210,140,28)]"
            style={{
              textShadow:
                "-1px -1px 0px rgb(210,140,28), 1px -1px 0px rgb(210,140,28), -1px 1px 0px rgb(210,140,28), 1px 1px 0px rgb(210,140,28)",
            }}
          >
            <span className="block">Welcome to</span>
            <span className="block">Your Perfect Getaway!</span>
          </h1>
          <p className="max-w-[900px] text-white text-2xl p-8 bg-warning/50 backdrop-blur-md rounded-xl">
            Are you looking for your dream vacation rental? Whether it's a cozy
            apartment in the heart of the city, a spacious family house in a
            tranquil suburb, a luxurious beachfront condominium, or a private
            resort nestled in paradise – you've come to the right place!
          </p>
        </div>
        <p className="absolute bottom-1 right-1 text-white/10">
          <a href="https://www.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_2448708.htm#query=appartment&position=9&from_view=search&track=sph">
            Image by katemangostar
          </a>{" "}
          on Freepik
        </p>
      </div>
    </section>
  );
};
