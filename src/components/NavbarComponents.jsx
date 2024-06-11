import "./css/navbarcomponents.css";

import logo from "../assets/images/logo.png";

import { NavLink } from "react-router-dom";
import { menu } from "../assets/data/data";

const NavbarComponents = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="logo sekolah sman 1 indonesia" className="navimg-logo"/>
          <h1>SMAN 1 INDONESIA</h1>
        </div>
        <ul className="nav-list">
          {menu.map((menus) => {
            return (
              <li className="nav-link" key={menus.id}>
                <NavLink to={menus.path}>{menus.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavbarComponents;
