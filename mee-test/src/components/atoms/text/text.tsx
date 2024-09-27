import { cn } from "@/lib/utils";
import React from "react";
interface TextProps {
  size: "header" | "title" | "description";
  children: React.ReactNode;
  className?: string;
  headerColor?: string;
}
export const Text = ({ size, children, className }: TextProps) => {
  return (
    <p
      className={cn(
        size === "header" &&
          "text-[16px] font-bold leading-[20px] text-green-100 ",
        size === "title" &&
          "text-[24px] md:text-[40px] leading-[50px] font-bold crimson-text-bold",
        size === "description" && "text-[15px] leading-[19px] work-sans-unique",
        className
      )}
    >
      {children}
    </p>
  );
};
