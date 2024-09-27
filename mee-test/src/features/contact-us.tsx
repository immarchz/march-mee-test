import { Form } from "@/components/molecules/form";
import { HeaderSection } from "@/components/molecules/header-section";
import Image from "next/image";
import React from "react";

export const ContactUs = () => {
  return (
    <div className="pt-24 flex flex-col px-12">
      <HeaderSection
        title="Contact Us"
        header=""
        description="Lorem ipsum, dolor sit amet consectetur
adipisicing elit."
      />
      <div className="flex md:flex-row flex-col justify-center gap-4 py-12 md:px-0 px-4">
        <div className="lg:w-1/2 w-full md:block hidden">
          <Form />
        </div>
        <div className="w-[575px] h-[384px]">
          <Image
            src="https://picsum.photos/575/384"
            width={575}
            height={384}
            alt="contact"
            className="w-full h-full"
          />
        </div>
        <div className="w-full md:hidden block">
          <Form />
        </div>
      </div>
    </div>
  );
};
