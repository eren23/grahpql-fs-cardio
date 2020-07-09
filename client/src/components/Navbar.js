import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
      <Link className="navbar-brand" to="/">
        News
      </Link>
      <Link className="navbar-brand" to="/results">
        Results
      </Link>
    </nav>
  );
};

export default Navbar;
