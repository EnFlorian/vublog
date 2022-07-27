import "./Navbar.scss";
import { navLinks } from "../../data";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = navLinks.map(({ name, path }, idx) => (
    <li key={idx} className="navbar__nav-link">
      <NavLink to={path}>{name}</NavLink>
    </li>
  ));

  return (
    <header className="navbar">
      <section className="navbar__wrapper container">
        <h1 className="navbar__logo">
          <NavLink to="/">Personal Blog</NavLink>
        </h1>
        <nav>
          <ul className="navbar__nav-links">
            {links}
            <li className="navbar__nav-link">
              <ThemeSwitch />
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
