import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/uslugi"> Usługi </Link>
          <Link to="/o-nas"> O Nas </Link>
          <Link to="/kontakt"> Kontakt </Link>
        </div>
      </div>
      <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/uslugi"> Usługi </Link>
          <Link to="/o-nas"> O Nas </Link>
          <Link to="/kontakt"> Kontakt </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
