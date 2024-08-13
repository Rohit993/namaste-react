import React from "react";
import { LOGO_URL } from "../../utils/constant.js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-30 flex justify-between items-center px-6 bg-white shadow-md">
      <div className="flex-shrink-0">
        <Link to={`/`}>
          <img className="w-32 h-auto" src={LOGO_URL} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-6 text-gray-700">
          <li>
            <Link
              className="hover:text-blue-600 transition-colors duration-200"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-600 transition-colors duration-200"
              to="/about"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-600 transition-colors duration-200"
              to="/contact"
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-600 transition-colors duration-200"
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-600 transition-colors duration-200"
              to="/cart"
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
