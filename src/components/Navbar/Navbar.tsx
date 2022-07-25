import "./Navbar.scss";
// import { Link } from "react-router-dom";
import navLinks from "../../data";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { Link } from "react-router-dom";

interface INavLink {
  title: string;
  path: string;
}

const Navbar = () => {
  // const navLinksList = (navLinks as unknown as any[]).map((link) => {
  //   return (
  //     <Link to={link.path} key={link.title}>
  //       <li>{link.title}</li>
  //     </Link>
  //   );
  // });

  return (
    <header className="navbar">
      <section className="navbar__wrapper container">
        <h1 className="navbar__logo">
          <Link to="/">Personal Blog</Link>
        </h1>
        <nav>
          {/* <ul className="navbar__nav-links">{navLinksList}</ul> */}

          <ul>
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
