import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTiktok,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-12 bg-hero flex md:flex-row flex-col justify-between items-center">
      <div className="flex items-center gap-4 text-[20px]">
        <FontAwesomeIcon icon={faFacebook} className="text-white" />
        <FontAwesomeIcon icon={faInstagram} className="text-white" />
        <FontAwesomeIcon icon={faTwitter} className="text-white" />
        <FontAwesomeIcon icon={faPinterest} className="text-white" />
        <FontAwesomeIcon icon={faTiktok} className="text-white" />
        <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
        <FontAwesomeIcon icon={faYoutube} className="text-white" />
      </div>
      <p className="text-[20px] leading-[25px] text-white font-medium pt-3 md:pt-0">
        © Start, 2022. All rights reserved.
      </p>
    </div>
  );
};
