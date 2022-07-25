import "./Home.scss";
import { Fragment } from "react";
import { BlogSection, HeaderSection, Navbar, Sidebar } from "../../components";

const Home = () => {
  return (
    <Fragment>
      <HeaderSection />
      <section className="home">
        <div className="container home__wrapper">
          <BlogSection />
          <Sidebar />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
