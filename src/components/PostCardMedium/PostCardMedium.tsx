import "./PostCardMedium.scss";
import { Link } from "react-router-dom";
import { IPost } from "../../state/types";

const PostCardMedium = ({ title, id, summary, image, author, createdAt }: IPost) => {
  return (
    <section className="post-card-medium">
      <img src={image} alt="" className="post-card-medium__image" />
      <Link to={`/post/${id}`}>
        <h1 className="post-card-medium__title">{title}</h1>
      </Link>
      <p className="post-card-medium__text">{summary}</p>
      <section className="post-card-medium__details">
        <img src={author.image} alt="Author" className="post-card-medium__author-image" />
        <section className="post-card-medium__info-container">
          <h1 className="post-card-medium__author-name">{author.name}</h1>
          <p className="post-card-medium__info">{createdAt} </p>
        </section>
      </section>
    </section>
  );
};

export default PostCardMedium;
