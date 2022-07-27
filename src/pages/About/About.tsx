import "./About.scss";
import { about } from "../../data";
import { SectionDivider } from "../../components";

const About = () => {
  return (
    <section className="about">
      <div className="about__wrapper container">
        <section className="about__header">
          <h1 className="about__title">About Me</h1>
          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur
            consectetur.
          </p>
          <div className="about__image-wrapper">
            <img className="about__image" src={about.image} alt="about" />
          </div>
        </section>
        <section className="about__content">
          <div className="about__left-content">
            <SectionDivider title="Who am I?" />
            <p className="about__text">{about.background}</p>
          </div>
          <div className="about__right-content">
            <section className="about__section">
              <SectionDivider title="Web Development" />
              <p className="about__text">{about.webdev}</p>
            </section>
            <section className="about__section">
              <SectionDivider title="DevOps" />
              <p className="about__text">{about.devops}</p>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
