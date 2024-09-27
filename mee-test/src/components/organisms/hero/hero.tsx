import { InfoCard } from "@/components/molecules/info-card";
import React from "react";

export const Hero = () => {
  return (
    <div className="bg-hero ">
      <div className="flex justify-center items-center text-white px-2 pt-24 pb-12 md:px-20 ">
        <InfoCard
          title="Lorem ipsum dolor sit amet consectetur "
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?"
          buttonText="Explore"
          buttonState="white"
          rightImage="/group-1.png"
          addon="welcome"
        />
      </div>
    </div>
  );
};
