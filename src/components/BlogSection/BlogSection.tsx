import "./BlogSection.scss";
import PostCardLarge from "../PostCardLarge/PostCardLarge";
import SectionDivider from "../SectionDivider/SectionDevider";
import { usePostStore } from "../../state/store";
import { useEffect, useState } from "react";
import { IPost } from "../../state/types";
import BaseButton from "../BaseButton/BaseButton";
import { PuffLoader } from "react-spinners";

const BlogSection = () => {
  const { posts } = usePostStore((state) => state);
  const [renderedPosts, setRenderedPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRenderedPosts(posts.slice(0, 4));
    setLoading(false);
  }, []);

  const cards = renderedPosts.map((post, idx) => {
    return <PostCardLarge key={idx} {...post} />;
  });

  const loadMore = () => {
    setLoading(true);
    setRenderedPosts([...renderedPosts, ...posts.slice(renderedPosts.length, renderedPosts.length + 3)]);
    setLoading(false);
  };

  const loadLess = () => {
    setRenderedPosts(posts.slice(0, 4));
  };

  return (
    <section className="blog-section">
      <SectionDivider title="Recently Published" />
      {!loading ? <div className="blog-section__cards-container">{cards}</div> : <PuffLoader size={100} />}
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
