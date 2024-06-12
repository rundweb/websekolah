import "./css/navbarcomponents.css";

import logo from "../assets/images/logo.png";

import { NavLink } from "react-router-dom";
import { menu } from "../assets/data/data";
import { useState } from "react";

const NavbarComponents = () => {
  const [openMenu, setMenu] = useState("nav-list");

  const clikcOpen = () => {
    if (
      openMenu === "nav-list" ? setMenu("nav-list open") : setMenu("nav-list")
    );
  };
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img
            src={logo}
            alt="logo sekolah sman 1 indonesia"
            className="navimg-logo"
          />
          <h1>
            SMAN 1 <br /> INDONESIA
          </h1>
        </div>
        <ul className={openMenu}>
          {menu.map((menus) => {
            return (
              <li className="nav-link" key={menus.id}>
                <NavLink to={menus.path}>{menus.name}</NavLink>
              </li>
            );
          })}
        </ul>
        <div className="btn-menu" onClick={clikcOpen}>
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
