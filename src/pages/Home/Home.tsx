import "./Home.scss";
import { Fragment } from "react";
import { BlogSection, HeaderSection, Navbar, Sidebar } from "../../components";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <HeaderSection />
      <div className="home-container">
        <BlogSection />
        <Sidebar />
      </div>
    </Fragment>
  );
};

export default Home;
