import { Link } from "react-router-dom";
import { IPost } from "../../state/types";
import "./PostCardLarge.scss";

const PostCardLarge = ({ id, title, summary, author, createdAt, image }: IPost) => {
  return (
    <section className="post-card-large">
      <div className="post-card-large-content">
        <img src={image} alt="" className="post-card-large__image" />
      </div>
      <section className="post-card-large__right-content">
        <Link to={`/post/${id}`}>
          <h1 className="post-card-large__title">{title}</h1>
        </Link>
        <p className="post-card-large__text">{summary}</p>
        <section className="post-card-large__details">
          <img src={author.image} alt={author.name} className="post-card-large__author-image" />
          <section className="post-card-large__info-container">
            <h1 className="post-card-large__author-name">{author.name}</h1>
            <p className="post-card-large__info">{createdAt} </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default PostCardLarge;
