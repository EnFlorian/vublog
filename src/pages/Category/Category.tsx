import { useParams } from "react-router-dom";
import { PostCardMedium, SectionDivider } from "../../components";
import { usePostStore } from "../../state/store";
import "./Category.scss";

const Category = () => {
  const { posts } = usePostStore((state) => state);
  const { category } = useParams();

  const filteredPosts = posts.filter((post) => post.category.toLowerCase() === category?.toLowerCase());

  const cards = filteredPosts.map((post, idx) => {
    return (
      <li key={idx} className="category__post">
        <PostCardMedium {...post} />
      </li>
    );
  });

  return (
    <section className="category">
      <div className="category__wrapper container">
        <SectionDivider title={category || ""} />
        <ul className="category__posts">{cards}</ul>
      </div>
    </section>
  );
};

export default Category;
