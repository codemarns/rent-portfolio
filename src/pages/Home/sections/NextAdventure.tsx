import React from "react";

export const NextAdventure: React.FC = () => {
  return (
    <section
      id="next-adventure-section"
      className="relative h-auto w-full max-w-[1920px] mx-auto px-8 py-24 bg-warning bg-[url('/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg')] bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:backdrop-blur-md before:bg-white/50"
    >
      <div className="h-auto w-full max-w-[1440px] mx-auto flex flex-col items-center gap-20">
        <h2 className="relative inline-block text-5xl font-bold before:content-[''] before:absolute before:left-0 before:-top-10 before:h-8 before:w-24 before:border before:border-warning before:rounded-lg after:content-[''] after:absolute after:-right-14 after:-bottom-8 after:h-6 after:w-28 after:bg-warning after:rounded-lg">
          Book Your Next Adventure Today
        </h2>
        <p className="relative inline-block max-w-[900px] p-8 text-2xl text-center font-bold">
          Ready to embark on your next vacation or business trip? Explore our
          selection of rental properties, and start planning your next adventure
          today. With Easy Rent, your perfect rental experience is just a click
          away.
        </p>
        <p className="absolute bottom-1 right-1 text-white/10">
          Image by{" "}
          <a href="https://www.freepik.com/free-photo/happy-couple-forest-being-together_11508287.htm#query=adventure&position=48&from_view=search&track=sph">
            Freepik
          </a>
        </p>
      </div>
    </section>
  );
};
