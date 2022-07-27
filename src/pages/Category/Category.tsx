import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { PostCardMedium, SectionDivider } from "../../components";
import { usePostStore } from "../../state/store";
import "./Category.scss";

const Category = () => {
  const { posts } = usePostStore((state) => state);
  const [renderedPosts, setRenderedPosts] = useState(posts);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setRenderedPosts(posts.filter((post) => post.category.toLowerCase() === category?.toLowerCase()));
    setLoading(false);
  }, [posts, category]);

  const cards = renderedPosts.map((post, idx) => {
    return (
      <li key={idx} className="category__post">
        <PostCardMedium {...post} />
      </li>
    );
  });

  return (
    <section className="category">
      {!loading ? (
        <div className="category__wrapper container">
          <SectionDivider title={category || ""} />
          <ul className="category__posts">{cards}</ul>
        </div>
      ) : (
        <PuffLoader size={100} />
      )}
    </section>
  );
};

export default Category;
