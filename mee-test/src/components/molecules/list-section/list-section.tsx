import { Button, ButtonProps } from "@/components/atoms/button/button";
import React from "react";

interface ListSectionProps {
  button: ButtonProps;
  children: React.ReactNode;
}

export const ListSection = ({ button, children }: ListSectionProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center lg:flex-row flex-col gap-8 mb-10">
        {children}
      </div>
      <Button variant={button.variant}>{button.children}</Button>
    </div>
  );
};
