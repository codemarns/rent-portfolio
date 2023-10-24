import React from "react";
import { Button } from "../../../components";

export const WhyChoose: React.FC = () => {
  return (
    <section
      id="why-choose-section"
      className="h-auto w-full max-w-[1920px] mx-auto py-24"
    >
      <div className="h-auto w-full max-w-[1440px] mx-auto flex flex-col items-center">
        <h2 className="relative inline-block text-5xl font-bold before:content-[''] before:absolute before:left-0 before:-top-10 before:h-8 before:w-24 before:border before:border-warning before:rounded-lg after:content-[''] after:absolute after:-right-14 after:-bottom-8 after:h-6 after:w-28 after:bg-warning after:rounded-lg">
          Why Choose <span className="text-warning">Easy Rent</span>
        </h2>
      </div>

      <div className="bg-transparent px-8 py-24">
        <div className="h-auto w-full max-w-[1440px] mx-auto grid grid-cols-2">
          <div className="h-auto p-16 flex items-center justify-center">
            <div className="relative h-[500px] w-full max-w-[400px] rounded-xl bg-[url('/smiling-woman-using-laptop-floor-home.jpg')] bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:-top-16 before:-left-8 before:-z-[1] before:w-full before:max-w-[400px] before:h-[500px] before:border before:border-warning before:rounded-xl after:content-[''] after:absolute after:-right-16 after:-bottom-16 after:-z-[1] after:w-full after:max-w-[400px] after:h-[500px] after:bg-warning after:rounded-xl">
              <p className="absolute bottom-1 right-1 text-white/10">
                <a href="https://www.freepik.com/free-photo/smiling-woman-using-laptop-floor-home_11453055.htm#query=facing%20laptops&position=48&from_view=search&track=ais#position=48&query=facing%20laptops">
                  Image by gpointstudio
                </a>{" "}
                on Freepik
              </p>
            </div>
          </div>
          <div className="relative h-auto p-16 space-y-20 before:content-[''] before:absolute before:right-0 before:-bottom-0 before:-z-[1] before:h-52 before:w-24 before:border before:border-warning before:rounded-xl after:content-[''] after:absolute after:right-[9.4rem] after:-bottom-0 after:rotate-45 after:-z-[1] after:h-52 after:w-24 after:border after:border-warning after:rounded-xl">
            <h2 className="relative inline-block text-3xl font-bold after:content-[''] after:absolute after:left-0 after:-bottom-6 after:h-4 after:w-28 after:bg-warning after:rounded-md">
              User-Friendly
            </h2>
            <div className="space-y-6">
              <p>
                Our website is designed for ease of use. Search, filter, and
                compare properties effortlessly.
              </p>
              <Button
                color="warning"
                corner="rounded"
                variant="outline"
                label="Show More"
                iconPosition="right"
                iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                className="hover:gap-4"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-warning-50/50 px-8 py-24">
        <div className="h-auto w-full max-w-[1440px] mx-auto grid grid-cols-2">
          <div className="relative h-auto p-16 space-y-20 before:content-[''] before:absolute before:left-16 before:bottom-0 before:z-[1] before:h-52 before:w-24 before:border before:border-warning before:rounded-xl after:content-[''] after:absolute after:left-[13.75rem] after:-bottom-[3.5rem] after:rotate-90 after:z-[1] after:h-52 after:w-24 after:border after:border-warning after:rounded-xl">
            <h2 className="relative inline-block text-3xl font-bold after:content-[''] after:absolute after:left-0 after:-bottom-6 after:h-4 after:w-28 after:bg-warning after:rounded-md">
              Verified Listings
            </h2>
            <div className="space-y-6">
              <p>
                We ensure the accuracy and authenticity of property listings, so
                you can trust what you see.
              </p>
              <Button
                color="warning"
                corner="rounded"
                variant="outline"
                label="Show More"
                iconPosition="right"
                iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                className="hover:gap-4"
              />
            </div>
          </div>
          <div className="z-[1] h-auto p-16 flex items-center justify-center">
            <div className="relative h-[500px] w-full max-w-[400px] rounded-xl bg-[url('/checkbox-hand-writing-concepts-yes.jpg')] bg-no-repeat bg-cover bg-left before:content-[''] before:absolute before:-top-16 before:-left-8 before:-z-[1] before:w-full before:max-w-[400px] before:h-[500px] before:border before:border-warning before:rounded-xl after:content-[''] after:absolute after:-right-16 after:-bottom-16 after:-z-[1] after:w-full after:max-w-[400px] after:h-[500px] after:bg-warning after:rounded-xl">
              <p className="absolute bottom-1 right-1 text-white/10">
                <a href="https://www.freepik.com/free-photo/checkbox-hand-writing-concepts-yes_1145345.htm#query=listing&position=0&from_view=search&track=sph">
                  Image by jannoon028
                </a>{" "}
                on Freepik
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-transparent px-8 py-24">
        <div className="h-auto w-full max-w-[1440px] mx-auto grid grid-cols-2">
          <div className="h-auto p-16 flex items-center justify-center">
            <div className="relative h-[500px] w-full max-w-[400px] rounded-xl bg-[url('/close-up-person-doing-online-shopping.jpg')] bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:-top-16 before:-left-8 before:-z-[1] before:w-full before:max-w-[400px] before:h-[500px] before:border before:border-warning before:rounded-xl after:content-[''] after:absolute after:-right-16 after:-bottom-16 after:-z-[1] after:w-full after:max-w-[400px] after:h-[500px] after:bg-warning after:rounded-xl">
              <p className="absolute bottom-1 right-1 text-white/10">
                Image by{" "}
                <a href="https://www.freepik.com/free-photo/close-up-person-doing-online-shopping_20034620.htm#page=9&query=secure%20booking&position=23&from_view=search&track=ais">
                  Freepik
                </a>
              </p>
            </div>
          </div>
          <div className="relative h-auto p-16 space-y-20 before:content-[''] before:absolute before:right-0 before:-bottom-0 before:-z-[1] before:h-52 before:w-24 before:border before:border-warning before:rounded-xl after:content-[''] after:absolute after:right-[9.4rem] after:-bottom-0 after:rotate-45 after:-z-[1] after:h-52 after:w-24 after:border after:border-warning after:rounded-xl">
            <h2 className="relative inline-block text-3xl font-bold after:content-[''] after:absolute after:left-0 after:-bottom-6 after:h-4 after:w-28 after:bg-warning after:rounded-md">
              Secure Booking
            </h2>
            <div className="space-y-6">
              <p>
                Your security is our priority. Our booking process is safe and
                hassle-free.
              </p>
              <Button
                color="warning"
                corner="rounded"
                variant="outline"
                label="Show More"
                iconPosition="right"
                iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                className="hover:gap-4"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-warning-50/50 px-8 py-24">
        <div className="h-auto w-full max-w-[1440px] mx-auto grid grid-cols-2">
          <div className="relative h-auto p-16 space-y-20 before:content-[''] before:absolute before:left-0 before:-bottom-0 before:-z-[1] before:h-52 before:w-24 before:border before:border-warning before:rounded-xl after:content-[''] after:absolute after:left-[9.75rem] after:-bottom-[3.5rem] after:rotate-90 after:-z-[1] after:h-52 after:w-24 after:border after:border-warning after:rounded-xl">
            <h2 className="relative inline-block text-3xl font-bold after:content-[''] after:absolute after:left-0 after:-bottom-6 after:h-4 after:w-28 after:bg-warning after:rounded-md">
              24/7 Customer Support
            </h2>
            <div className="space-y-6">
              <p>
                Our dedicated support team is available around the clock to
                assist you with any inquiries or concerns.
              </p>
              <Button
                color="warning"
                corner="rounded"
                variant="outline"
                label="Show More"
                iconPosition="right"
                iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                className="hover:gap-4"
              />
            </div>
          </div>
          <div className="z-[1] h-auto p-16 flex items-center justify-center">
            <div className="relative h-[500px] w-full max-w-[400px] rounded-xl bg-[url('/portrait-woman-customer-service-worker.jpg')] bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:-top-16 before:-left-8 before:-z-[1] before:w-full before:max-w-[400px] before:h-[500px] before:border before:border-warning before:rounded-xl after:content-[''] after:absolute after:-right-16 after:-bottom-16 after:-z-[1] after:w-full after:max-w-[400px] after:h-[500px] after:bg-warning after:rounded-xl">
              <p className="absolute bottom-1 right-1 text-white/10">
                <a href="https://www.freepik.com/free-photo/portrait-woman-customer-service-worker_9722861.htm#page=3&query=24%207%20Customer%20Support&position=25&from_view=search&track=ais">
                  Image by Racool_studio
                </a>{" "}
                on Freepik
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-transparent px-8 py-24">
        <div className="h-auto w-full max-w-[1440px] mx-auto grid grid-cols-2">
          <div className="h-auto p-16 flex items-center justify-center">
            <div className="relative h-[500px] w-full max-w-[400px] rounded-xl bg-[url('/young-professional-women-standing-together-watching-design-screen.jpg')] bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:-top-16 before:-left-8 before:-z-[1] before:w-full before:max-w-[400px] before:h-[500px] before:border before:border-warning before:rounded-xl after:content-[''] after:absolute after:-right-16 after:-bottom-16 after:-z-[1] after:w-full after:max-w-[400px] after:h-[500px] after:bg-warning after:rounded-xl">
              <p className="absolute bottom-1 right-1 text-white/10">
                <a href="https://www.freepik.com/free-photo/young-professional-women-standing-together-watching-design-screen_11081407.htm#page=8&query=local%20insights&position=39&from_view=search&track=ais">
                  Image by pch.vector
                </a>{" "}
                on Freepik
              </p>
            </div>
          </div>
          <div className="relative h-auto p-16 space-y-20 before:content-[''] before:absolute before:right-0 before:-bottom-0 before:-z-[1] before:h-52 before:w-24 before:border before:border-warning before:rounded-xl after:content-[''] after:absolute after:right-[9.4rem] after:-bottom-0 after:rotate-45 after:-z-[1] after:h-52 after:w-24 after:border after:border-warning after:rounded-xl">
            <h2 className="relative inline-block text-3xl font-bold after:content-[''] after:absolute after:left-0 after:-bottom-6 after:h-4 after:w-28 after:bg-warning after:rounded-md">
              Local Insights
            </h2>
            <div className="space-y-6">
              <p>
                We provide local recommendations, ensuring you make the most of
                your stay by experiencing the best of the area.
              </p>
              <Button
                color="warning"
                corner="rounded"
                variant="outline"
                label="Show More"
                iconPosition="right"
                iconPath="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                className="hover:gap-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
