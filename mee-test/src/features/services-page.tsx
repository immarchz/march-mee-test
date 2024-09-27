import { HeaderSection } from "@/components/molecules/header-section";
import { ServiceCard } from "@/components/molecules/service-card";
import React from "react";

export const ServicesPage = () => {
  return (
    <div className="pt-24 flex flex-col">
      <div>
        <HeaderSection
          header="Plans"
          title="Our Services"
          description="Lorem ipsum, dolor sit amet consectetur
adipisicing elit."
        />
      </div>
      <div className="flex px-12 gap-4 justify-center md:flex-row flex-col items-center py-12">
        <ServiceCard
          type="Basic"
          price={100}
          description="Lorem ipsum, dolor sit amet consectetur
          adipisicing elit."
          services={["Lorem", "Ipsum", "Dolor"]}
        />

        <ServiceCard
          type="Basic"
          price={100}
          description="Lorem ipsum, dolor sit amet consectetur
          adipisicing elit."
          services={["Lorem", "Ipsum", "Dolor"]}
        />

        <ServiceCard
          type="Basic"
          price={100}
          description="Lorem ipsum, dolor sit amet consectetur
          adipisicing elit."
          services={[
            "Lorem Ipsum",
            "Ipsum",
            "Dolor Ipsum",
            "Dolor Ipsum",
            "Dolor Ipsum",
          ]}
        />
      </div>
    </div>
  );
};
