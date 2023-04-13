import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex gap-4 pb-12 mt-5 justify-center ">
      <Link className="btn" to="/">
        Home
      </Link>
      <Link className="btn" to="/login">
        Login
      </Link>
    </nav>
  );
};

export default Header;
