import "./Socials.scss";
import { socials } from "../../data";
import { Link } from "react-router-dom";

const Socials = () => {
  const socialCards = socials.map((social, idx) => {
    return (
      <li key={idx}>
        <Link to={social.path}>
          <i className="socials__icon">{social.icon}</i>
        </Link>
      </li>
    );
  });

  return (
    <div className="socials">
      <ul className="socials__container">{socialCards}</ul>
    </div>
  );
};

export default Socials;
