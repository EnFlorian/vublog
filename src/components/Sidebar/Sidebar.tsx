import "./Sidebar.scss";
import SectionDivider from "../SectionDivider/SectionDevider";
import { categories } from "../../data";
import CategoryCard from "../CategoryCard/CategoryCard";
import Socials from "../Socials/Socials";
import NewsLetter from "../NewsLetter/NewsLetter";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const categorieCards = categories.map((category) => {
    return (
      <li key={category.id}>
        <Link to={`/posts/${category.name}`}>
          <CategoryCard {...category} />
        </Link>
      </li>
    );
  });

  return (
    <section className="sidebar">
      <section className="sidebar__section">
        <SectionDivider title="Categories" />
        <ul className="sidebar__categories-container">{categorieCards}</ul>
      </section>
      <section className="sidebar__section">
        <SectionDivider title="Socials" />
        <div className="sidebar__socials-container">
          <Socials />
        </div>
      </section>
      <section>
        <SectionDivider title="Lets Stay in Touch" />
        <NewsLetter />
      </section>
    </section>
  );
};

export default Sidebar;
