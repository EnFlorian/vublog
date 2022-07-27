import { useState } from "react";
import { useUIStore } from "../../state/store";
import BaseButton from "../BaseButton/BaseButton";
import "./NewsLetter.scss";

const NewsLetter = () => {
  const { openNotificationModal } = useUIStore((state) => state);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    openNotificationModal();
  };

  return (
    <section className="newsletter">
      <div className="newsletter__wrapper">
        <p className="newsletter__text"> Subscribe and get the latest news and updates.</p>
        <form className="newsletter__form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter__input"
            type="email"
            placeholder="Enter Email..."
          />
          <BaseButton func={openNotificationModal} variant="primary" name="Subscribe" />
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
