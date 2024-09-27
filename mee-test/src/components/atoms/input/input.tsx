import React from "react";
import { Text } from "../text/text";
import { cn } from "@/lib/utils";

interface InputProps {
  placeholder?: string;
  label?: string;
  type?: string;
}

export const Input = ({ placeholder, label, type }: InputProps) => {
  return (
    <div className="flex flex-col gap-4">
      {label && <Text size="description">{label}</Text>}
      <input
        placeholder={placeholder}
        className={cn(
          "w-full border border-black bg-input",
          type === "message" ? "h-[75px]" : "h-[38px]"
        )}
      />
    </div>
  );
};
