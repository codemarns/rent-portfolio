import React from "react";
import { Section } from "../../../layouts";

export const Ratings: React.FC = () => {
  return (
    <Section id="ratings" className="min-h-[153px] !p-8">
      <Section
        size="lg"
        type="inner"
        id="ratings-container-inner"
        className="grid grid-cols-[repeat(auto-fill,_minmax(225px,_1fr))] gap-8"
      >
        <div className="min-h-[100px] p-2 rounded-xl border border-warning flex flex-col items-center justify-center gap-2">
          <span className="block text-5xl font-bold">5M+</span>
          <span className="block">Visits</span>
        </div>
        <div className="min-h-[100px] p-2 rounded-xl border border-warning flex flex-col items-center justify-center gap-2">
          <span className="block text-5xl font-bold">1M+</span>
          <span className="block">Downloads</span>
        </div>
        <div className="min-h-[100px] p-2 rounded-xl border border-warning flex flex-col items-center justify-center gap-2">
          <span className="block text-5xl font-bold">10K+</span>
          <span className="block">User Reviews</span>
        </div>
        <div className="min-h-[100px] p-2 rounded-xl border border-warning flex flex-col items-center justify-center gap-2">
          <span className="block text-5xl font-bold">65K+</span>
          <span className="block">Property Owners</span>
        </div>
        <div className="min-h-[100px] p-2 rounded-xl border border-warning flex flex-col items-center justify-center gap-2">
          <span className="block text-5xl font-bold">37K+</span>
          <span className="block">Owner Reviews</span>
        </div>
      </Section>
    </Section>
  );
};
