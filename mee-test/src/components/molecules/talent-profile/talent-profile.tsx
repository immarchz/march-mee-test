import { Text } from "@/components/atoms/text/text";
import Image from "next/image";
import React from "react";

interface TalentProfileProps {
  name: string;
  image: string;
  role: string;
}

export const TalentProfile = ({ name, image, role }: TalentProfileProps) => {
  return (
    <div className="w-[279px] h-[299px] flex flex-col gap-3 border shadow-service rounded-[5px]">
      <div className="flex items-center justify-center gap-3 pt-5">
        <div className="rounded-full shrink-0 w-[175px] h-[175px] border border-black overflow-hidden flex items-center justify-center">
          <Image src={image} alt="profile" width={175} height={175} />
        </div>
      </div>
      <div className="flex flex-col items-start text-start gap-2 px-[50px]">
        {" "}
        {/* Changed items-center to items-start */}
        <p className="text-[24px] leading-[30px] font-bold">{name}</p>
        <Text size="description">{role}</Text>
      </div>
    </div>
  );
};
