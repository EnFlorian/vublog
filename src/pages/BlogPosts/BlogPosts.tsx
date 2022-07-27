import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { PostCardMedium, SectionDivider } from "../../components";
import { usePostStore } from "../../state/store";
import { IPost } from "../../state/types";
import "./BlogPosts.scss";

const BlogPosts = () => {
  const { posts } = usePostStore((state) => state);
  const [renderedPosts, setRenderedPosts] = useState<IPost[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRenderedPosts(posts);
    setLoading(false);
  }, [posts]);

  const categories = renderedPosts?.reduce((acc, post) => {
    if (!acc.includes(post.category)) {
      acc.push(post.category);
    }
    return acc;
  }, [] as string[]);

  const sections = categories?.map((category, index) => {
    return (
      <section key={index}>
        <SectionDivider title={category} />
        <ul className="blog-posts__posts">
          {posts
            .filter((post) => post.category === category)
            .map((post, idx) => {
              return (
                <li key={idx}>
                  <PostCardMedium {...post} />
                </li>
              );
            })}
        </ul>
      </section>
    );
  });

  return (
    <section className="blog-posts">
      {!loading ? <div className="blog-posts__wrapper container">{sections}</div> : <PuffLoader size={100} />}
    </section>
  );
};

export default BlogPosts;
