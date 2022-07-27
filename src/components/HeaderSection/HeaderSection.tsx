import { Link } from "react-router-dom";
import BaseButton from "../BaseButton/BaseButton";
import "./HeaderSection.scss";
import avatar from "../../assets/images/person.jpg";

const HeaderSection = () => {
  return (
    <section className="header-section">
      <div className="header-section__wrapper container">
        <section className="header-section__left-content">
          <h1 className="header-section__title">
            Hi, I'm <span className="header-section__accent">Akira Bauer</span>,
            <br />
            Software Developer based in Linz
          </h1>
          <p className="header-section__subtitle"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="header-section__buttons">
            <Link to="/posts">
              <BaseButton variant="primary" name="Read More">
                Home
              </BaseButton>
            </Link>
            <Link to="/about">
              <BaseButton variant="secondary" name="About Me">
                About
              </BaseButton>
            </Link>
          </div>
        </section>
        <section className="header-section__right-content">
          <div className="header-section__image-wrapper">
            <img src={avatar} width="320" height="320" alt="avatar" className="header-section__image" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeaderSection;
