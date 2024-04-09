import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Nav = () => (
  <div className="Navbar">
    <Link to="/">
      <IoIosArrowBack className="arrow" />
    </Link>
    <div className="log"> Weather In Egypt</div>
    <input className="search" type="text" placeholder="Search.." />
  </div>
);
export default Nav;
