import React from "react";
import { cn } from "@/lib/utils";
export interface ButtonProps {
  variant: "white" | "black";
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ variant, children, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-[170px] h-[48px] rounded-[5px]",
        variant === "white" && "bg-white text-black",
        variant === "black" && "bg-black text-white",
        className
      )}
    >
      <p className="font-medium text-[20px] leading-[25px] work-sans-unique">
        {children}
      </p>
    </button>
  );
};
