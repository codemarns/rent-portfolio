import {
  Hero,
  About,
  Ratings,
  WhyChoose,
  RentalOffer,
  NextAdventure,
} from "./sections";

export function Home() {
  return (
    <>
      <Hero />
      <Ratings />
      <About />
      <RentalOffer />
      <WhyChoose />
      <NextAdventure />
    </>
  );
}
