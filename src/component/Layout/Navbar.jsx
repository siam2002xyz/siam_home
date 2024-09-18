import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container py-5  flex items-center justify-between">
        <Link to="/">
          <img src="/logo.png.png" alt="logo" />
        </Link>
        <ul className="flex gap-10 font-medium font-primary text-primary">
          <li>
            <Link to="/" className="transition-all hover:text-secondery">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="transition-all hover:text-secondery">
              About
            </Link>
          </li>
          <li>
            <a href="#" className="transition-all hover:text-secondery">
              Portfolio Layouts
            </a>
          </li>
          <li>
            <a href="#" className="transition-all hover:text-secondery">
              Portfolio Single
            </a>
          </li>
          <li>
            <a href="#" className="transition-all hover:text-secondery">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
