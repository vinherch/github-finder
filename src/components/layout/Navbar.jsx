import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="px-2 mx-2">
          <Link to="/" className="text-lg font-bold">
            <FaGithub className="inline pr-2 text-3xl" />
            <p className="inline align-middle">{title}</p>
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link className="btn btn-ghost btn-sm rounded-btm" to="/">
              Home
            </Link>
            <Link className="btn btn-ghost btn-sm rounded-btm" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "GitHub Finder",
};

export default Navbar;
