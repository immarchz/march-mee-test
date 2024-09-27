import { Text } from "@/components/atoms/text/text";
import React from "react";

interface HeaderSectionProps {
  header: string;
  title: string;
  description: string;
}

export const HeaderSection = ({
  header,
  title,
  description,
}: HeaderSectionProps) => {
  return (
    <div className="flex justify-center items-center pt-12">
      <div className="max-w-[411px] w-full">
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <Text size="header">{header}</Text>
          <Text size="title">{title}</Text>
          <Text size="description">{description}</Text>
        </div>
      </div>
    </div>
  );
};
