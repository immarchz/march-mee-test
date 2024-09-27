import { HeaderSection } from "@/components/molecules/header-section";
import { PortfolioList } from "@/components/molecules/portfolio-list/portfolio-list";
import React from "react";

export const PortfolioPage = () => {
  return (
    <div className="pt-24 flex flex-col">
      <div>
        <HeaderSection
          title="Portfolio"
          header="Works"
          description="Lorem ipsum, dolor sit amet consectetur
adipisicing elit."
        />
      </div>
      <div className="">
        <PortfolioList
          portfolio={[
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
          ]}
        />
      </div>
    </div>
  );
};
