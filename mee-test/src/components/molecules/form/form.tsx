import { Button } from "@/components/atoms/button/button";
import { Input } from "@/components/atoms/input";
import React from "react";

export const Form = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Input label="Name" />
      <Input label="Email" />
      <Input type="message" label="Message" />
      <Button className="w-full" variant="black">
        Submit
      </Button>
    </div>
  );
};
