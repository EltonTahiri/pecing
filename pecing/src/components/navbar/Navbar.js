import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import pecing from '../images/pecing.JPG'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  const extendElement = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={pecing} width="100" height="50" alt="logo" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
        <FontAwesomeIcon icon={click ? faTimes : faBars} />

        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Kryefaqja
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
              Rreth nesh
            </Link>
          </li>
          
            <li className="nav-item">
              <Link
                to="/kontakti"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Kontakti
              </Link>
            </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar
