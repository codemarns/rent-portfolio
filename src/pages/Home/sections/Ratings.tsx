import React from "react";

export const Ratings: React.FC = () => {
  return (
    <div
      id="partner-section"
      className="min-h-[153px] w-full max-w-[1920px] mx-auto p-8"
    >
      <div className="h-full w-full max-w-[1440px] mx-auto grid grid-cols-[repeat(auto-fill,_minmax(225px,_1fr))] gap-8">
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
      </div>
    </div>
  );
};
