import { Button } from "@/components/atoms/button/button";
import { Text } from "@/components/atoms/text/text";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ServiceCardProps {
  type: string;
  price: number;
  description: string;
  services: string[];
}

export const ServiceCard = ({
  type,
  price,
  description,
  services = [],
}: ServiceCardProps) => {
  return (
    <div className="w-[339px] h-[542px] py-[46px] px-[30px] flex flex-col justify-between items-center shadow-service rounded-xl">
      <div className="flex flex-col justify-center items-center">
        <Text size="description">{type}</Text>
        <div className="flex items-center gap-2">
          <p className="text-[40px] font-bold leading-[50px]">${price}</p>
          <span className="text-dark-50 ">
            <Text size="header" className="text-dark-50">
              /month
            </Text>
          </span>
        </div>
        <Text size="description" className="text-dark-50 text-center">
          {description}
        </Text>
      </div>
      <div className="pt-12">
        {services.map((item, index) => (
          <div key={index} className="flex flex-col pb-4">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} className="text-green-100" />
              <Text size="description" className="text-dark-100">
                {item}
              </Text>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-12">
        <Button variant="black">Learn More</Button>
      </div>
    </div>
  );
};
