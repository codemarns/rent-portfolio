import React from "react";
import { Section } from "../../../layouts";

export const About: React.FC = () => {
  return (
    <Section id="about">
      <Section
        id="about-container-inner"
        size="lg"
        type="inner"
        className={"grid grid-cols-2"}
      >
        <div className="h-auto p-16 flex items-center justify-center">
          <div className="relative h-[500px] w-full max-w-[400px] rounded-xl bg-[url('/front-view-smiley-female-realtor-empty-house.jpg')] bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:-top-16 before:-left-8 before:-z-[1] before:w-full before:max-w-[400px] before:h-[500px] before:border before:border-warning before:rounded-xl after:content-[''] after:absolute after:-right-16 after:-bottom-16 after:-z-[1] after:w-full after:max-w-[400px] after:h-[500px] after:bg-warning after:rounded-xl">
            <p className="absolute bottom-1 right-1 text-white/10">
              Image by{" "}
              <a href="https://www.freepik.com/free-photo/front-view-smiley-female-realtor-empty-house_13104884.htm#query=appartment%20owner&position=29&from_view=search&track=ais#position=29&query=appartment%20owner">
                Freepik
              </a>
            </p>
          </div>
        </div>

        <div className="relative h-auto p-16 space-y-20 before:content-[''] before:absolute before:right-0 before:-bottom-0 before:-z-[1] before:h-52 before:w-24 before:border before:border-warning before:rounded-xl after:content-[''] after:absolute after:right-[9.4rem] after:-bottom-0 after:rotate-45 after:-z-[1] after:h-52 after:w-24 after:border after:border-warning after:rounded-xl">
          <h2 className="relative inline-block text-5xl font-bold before:content-[''] before:absolute before:left-0 before:-top-10 before:h-8 before:w-24 before:border before:border-warning before:rounded-lg after:content-[''] after:absolute after:-right-14 after:-bottom-8 after:h-6 after:w-28 after:bg-warning after:rounded-lg">
            About Us
          </h2>
          <p>
            At Easy Rent, we specialize in connecting travelers and vacation
            seekers with the ideal rental properties to suit their needs and
            desires. Our extensive portfolio offers a wide range of options for
            your next escape, all designed to make your stay comfortable and
            memorable.
          </p>
        </div>
      </Section>
    </Section>
  );
};
