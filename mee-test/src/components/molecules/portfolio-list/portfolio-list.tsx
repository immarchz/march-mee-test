import { Button } from "@/components/atoms/button/button";
import Image from "next/image";
import React from "react";

interface PortfolioListProps {
  portfolio: string[];
}

export const PortfolioList = ({ portfolio }: PortfolioListProps) => {
  return (
    <div className="flex flex-col px-12 justify-center items-center gap-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {portfolio.map((item, index) => (
          <div
            key={index}
            className="lg:w-[570px] w-[335px] h-[196px] lg:h-[330px] border-2 border-black"
          >
            <Image
              src={item}
              alt="portfolio"
              width={570}
              height={330}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
      <div className="pt-12">
        <Button variant="black">Learn More</Button>
      </div>
    </div>
  );
};
