import { PostCardMedium, SectionDivider } from "../../components";
import { usePostStore } from "../../state/store";
import "./BlogPosts.scss";

const BlogPosts = () => {
  const { posts } = usePostStore((state) => state);

  const categories = posts.reduce((acc, post) => {
    if (!acc.includes(post.category)) {
      acc.push(post.category);
    }
    return acc;
  }, [] as string[]);

  const sections = categories.map((category, index) => {
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
      <div className="blog-posts__wrapper container">{sections}</div>
    </section>
  );
};

export default BlogPosts;
