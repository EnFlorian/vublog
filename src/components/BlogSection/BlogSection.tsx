import "./BlogSection.scss";
import PostCardLarge from "../PostCardLarge/PostCardLarge";
import SectionDivider from "../SectionDivider/SectionDevider";
import { usePostStore } from "../../state/store";
import { useEffect, useState } from "react";
import { IPost } from "../../state/types";
import BaseButton from "../BaseButton/BaseButton";

const BlogSection = () => {
  const { posts } = usePostStore((state) => state);
  const [renderedPosts, setRenderedPosts] = useState<IPost[]>([]);

  useEffect(() => {
    setRenderedPosts(posts.slice(0, 4));
  }, []);

  const cards = renderedPosts.map((post, idx) => {
    return <PostCardLarge key={idx} {...post} />;
  });

  const loadMore = () => {
    setRenderedPosts([...renderedPosts, ...posts.slice(renderedPosts.length, renderedPosts.length + 3)]);
  };

  const loadLess = () => {
    setRenderedPosts(posts.slice(0, 4));
  };

  return (
    <section className="blog-section">
      <SectionDivider title="Recently Published" />
      <div className="blog-section__cards-container">{cards}</div>
      {renderedPosts.length < posts.length ? (
        <div className="blog-section__button-container">
          <BaseButton name="Load More" variant="secondary" func={loadMore} />
        </div>
      ) : (
        <div className="blog-section__button-container">
          <BaseButton name="Load Less" variant="secondary" func={loadLess} />
        </div>
      )}
    </section>
  );
};

export default BlogSection;
