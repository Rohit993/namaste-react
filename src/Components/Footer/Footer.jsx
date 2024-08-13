import React from "react";
import { LOGO_URL } from "../../utils/constant";

const Footer = () => {
  return (
    <div className="footer bg-gray-800 py-6 flex justify-center items-center">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="w-24" />
      </div>
    </div>
  );
};

export default Footer;
