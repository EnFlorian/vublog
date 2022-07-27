import "./Navbar.scss";
import { navLinks } from "../../data";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  let activeLink: Element;

  const links = navLinks.map(({ name, path }, idx) => (
    <li onClick={(e) => handleClick(e)} key={idx} tabIndex={idx} className="navbar__nav-link">
      <Link to={path}>{name}</Link>
    </li>
  ));

  const handleClick = (event: React.MouseEvent) => {
    // activeLink?.classList.remove("navbar__nav-link--active");
    // activeLink = event.currentTarget;
    // event.currentTarget.classList.toggle("navbar__nav-link--active");
  };

  return (
    <header className="navbar">
      <section className="navbar__wrapper container">
        <h1 className="navbar__logo">
          <Link to="/">Personal Blog</Link>
        </h1>
        <nav>
          <ul className="navbar__nav-links">
            {links}
            <li className="navbar__theme-button">
              <ThemeSwitch />
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
