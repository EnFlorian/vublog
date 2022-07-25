import "./Navbar.scss";
// import { Link } from "react-router-dom";
import { navLinks } from "../../data";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = navLinks.map(({ name, path }, idx) => (
    <li key={idx} className="navbar__nav-link">
      <Link to={path}>{name}</Link>
    </li>
  ));

  return (
    <header className="navbar">
      <section className="navbar__wrapper container">
        <h1 className="navbar__logo">
          <Link to="/">Personal Blog</Link>
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
