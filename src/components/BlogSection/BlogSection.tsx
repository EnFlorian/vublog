import "./BlogSection.scss";
import { posts } from "../../data";
import PostCardLarge from "../PostCardLarge/PostCardLarge";

const BlogSection = () => {
  const cards = posts.map((post, idx) => {
    return <PostCardLarge key={idx} {...post} />;
  });

  return (
    <section className="blog-section">
      <div className="blog-section__cards-container">{cards}</div>
    </section>
  );
};

export default BlogSection;
