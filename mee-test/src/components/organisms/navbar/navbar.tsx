import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="fixed flex justify-between items-center w-full px-4 md:px-20 py-3 bg-hero">
      <div
        onClick={() => router.push("/")}
        className="flex items-center gap-2 cursor-pointer select-none"
      >
        <Image src="/logo.png" alt="logo" width={49} height={70} />
        <p className="text-white text-[30px] md:text-[40px] font-medium">
          Start
        </p>
      </div>
      <div className="md:flex items-center gap-8 text-white hidden">
        <button onClick={() => router.push("/")}>Home</button>
        <button onClick={() => router.push("/portfolio")}>Portfolio</button>
        <button onClick={() => router.push("/services")}>Services</button>
        <button onClick={() => router.push("/contact-us")}>Contact</button>
      </div>
      <div className="block md:hidden">
        <FontAwesomeIcon icon={faBars} className="text-white" />
      </div>
    </nav>
  );
};
