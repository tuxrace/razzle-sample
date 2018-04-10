import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <div>
    <Link to="/"> Forget Password </Link> | 
    <Link to="/reset-password"> Reset Password </Link> | 
    <Link to="/self-registration"> Self Registration </Link>
  </div>
);

export default Nav;
