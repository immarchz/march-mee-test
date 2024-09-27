import { Button } from "@/components/atoms/button/button";
import { Text } from "@/components/atoms/text/text";

import Image from "next/image";
import React from "react";

interface InfoCardProps {
  title: string;

  description: string;
  rightImage?: string;
  leftImage?: string;
  buttonText: string;
  buttonState: "black" | "white";
  addon?: string;
}

export const InfoCard = ({
  title,
  description,
  buttonText,
  buttonState = "black",
  rightImage,
  leftImage,
  addon,
}: InfoCardProps) => {
  return (
    <div className="flex justify-center items-center gap-10">
      {leftImage && (
        <div className="md:block hidden h-full shrink-0">
          <Image
            src={leftImage}
            alt="images"
            width={645}
            height={380}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
      <div className="flex justify-center flex-col gap-3">
        {leftImage && (
          <div className="md:hidden w-full shrink-0">
            <Image
              src={leftImage}
              alt="images"
              width={645}
              height={380}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        {rightImage && (
          <div className="md:hidden w-full shrink-0">
            <Image
              src={rightImage}
              alt="images"
              width={645}
              height={380}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        <div className="flex flex-col gap-4 px-4 md:px-12 max-w-[470px] w-full">
          {addon && (
            <p className="text-white font-bold text-[16px] leading-[20px]">
              {addon}
            </p>
          )}
          <Text size="title">{title}</Text>
          <Text size="description">{description}</Text>
          <div className="pt-6">
            <Button variant={buttonState}>{buttonText}</Button>
          </div>
        </div>
      </div>
      {rightImage && (
        <div className="md:flex justify-center items-center hidden h-[380px] shrink-0">
          <Image
            src={rightImage}
            alt="images"
            width={645}
            height={380}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};
