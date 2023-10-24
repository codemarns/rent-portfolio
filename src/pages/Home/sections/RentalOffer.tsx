import React from "react";
import { Button, Icon } from "../../../components";

export const RentalOffer: React.FC = () => {
  return (
    <section
      id="rental-offer-section"
      className="relative h-auto w-full max-w-[1920px] mx-auto px-8 py-24 bg-warning bg-[url('/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg')] bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:backdrop-blur-md before:bg-white/50"
    >
      <div className="h-auto w-full max-w-[1440px] mx-auto flex flex-col items-center gap-24">
        <h2 className="relative inline-block text-5xl font-bold before:content-[''] before:absolute before:left-0 before:-top-10 before:h-8 before:w-24 before:border before:border-warning before:rounded-lg after:content-[''] after:absolute after:-right-14 after:-bottom-8 after:h-6 after:w-28 after:bg-warning after:rounded-lg">
          Our Rental Offerings
        </h2>
        <div className="w-full grid grid-cols-4 gap-8">
          <div className="h-auto p-8 space-y-5 bg-white/75 hover:bg-white hover:scale-105 hover:shadow-xl backdrop-blur-md rounded-xl duration-300 ease-out transition-all">
            <Icon
              size="xl"
              color="warning"
              path="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
            <span className="inline-block text-lg font-bold">Houses</span>
            <p className="!mt-0 line-clamp-6">
              Discover a home away from home. Our collection of houses includes
              everything from charming cottages to modern villas, ensuring
              you'll find the perfect space to relax and make memories with
              loved ones.
            </p>
            <Button
              layout="block"
              color="warning"
              corner="rounded"
              variant="outline"
              label="Show More"
              iconPosition="right"
              iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </div>
          <div className="h-auto p-8 space-y-5 bg-white/75 hover:bg-white hover:scale-105 hover:shadow-xl backdrop-blur-md rounded-xl duration-300 ease-out transition-all">
            <Icon
              size="xl"
              color="warning"
              path="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
            />
            <span className="inline-block text-lg font-bold">Apartments</span>
            <p className="!mt-0 line-clamp-6">
              Experience the convenience and culture of urban living in our
              curated selection of apartments. We have options for solo
              travelers, couples, and families, all located in prime city
              locations.
            </p>
            <Button
              layout="block"
              color="warning"
              corner="rounded"
              variant="outline"
              label="Show More"
              iconPosition="right"
              iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </div>
          <div className="h-auto p-8 space-y-5 bg-white/75 hover:bg-white hover:scale-105 hover:shadow-xl backdrop-blur-md rounded-xl duration-300 ease-out transition-all">
            <Icon
              size="xl"
              color="warning"
              path="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
            />
            <span className="inline-block text-lg font-bold">Condominiums</span>
            <p className="!mt-0 line-clamp-6">
              Indulge in luxury and convenience with our condominium rentals.
              These stylish and well-appointed units offer stunning views and
              top-notch amenities, making your vacation unforgettable.
            </p>
            <Button
              layout="block"
              color="warning"
              corner="rounded"
              variant="outline"
              label="Show More"
              iconPosition="right"
              iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </div>
          <div className="h-auto p-8 space-y-5 bg-white/75 hover:bg-white hover:scale-105 hover:shadow-xl backdrop-blur-md rounded-xl duration-300 ease-out transition-all">
            <Icon
              size="xl"
              color="warning"
              path="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
            />
            <span className="inline-block text-lg font-bold">Resorts</span>
            <p className="!mt-0 line-clamp-6">
              Escape to paradise in our handpicked resorts. From serene
              beachfront properties to secluded mountain retreats, we have the
              perfect resort accommodations for an unforgettable getaway.
            </p>
            <Button
              layout="block"
              color="warning"
              corner="rounded"
              variant="outline"
              label="Show More"
              iconPosition="right"
              iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </div>
        </div>
      </div>
      <p className="absolute bottom-1 right-1 text-white/10">
        <a href="https://www.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_38852655.htm#page=4&query=appartment&position=8&from_view=search&track=sph">
          Image by benzoix
        </a>{" "}
        on Freepik
      </p>
    </section>
  );
};
