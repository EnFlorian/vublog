import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePostStore } from "../../state/store";
import { IPost } from "../../state/types";
import PuffLoader from "react-spinners/PuffLoader";
import "./BlogPost.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Sidebar } from "../../components";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { getPostById } = usePostStore((state) => state);
  const [post, setPost] = useState<IPost | null>(null);
  const { id } = useParams();

  useEffect(() => {
    setPost(getPostById(id || ""));
  }, []);

  return (
    <section className="blog-post">
      {post ? (
        <div className="blog-post__wrapper container">
          <section className="blog-post__left-content">
            <div className="blog-post__main-content">
              <h1 className="blog-post__title">{post.title}</h1>

              <div className="blog-post__image-wrapper">
                <img className="blog-post__image" src={post.image} alt={post.title} />
              </div>
              <section className="blog-post__content">
                <div className="markdown">
                  <ReactMarkdown className="preview__content" children={post.content} remarkPlugins={[remarkGfm]} />
                </div>
              </section>
            </div>
            <footer className="blog-post__footer">
              <div className="blog-post__footer-left">
                <div className="blog-post__footer-image-wrapper">
                  <img className="blog-post__footer-image" src={post.author.image} alt={post.author.name} />
                </div>
                <p className="blog-post__author">
                  Posted by <span className="blog-post__accent">{post.author.name}</span>
                </p>
              </div>
              <div className="blog-post__footer-right">
                <Link to={`/posts/${post.category}`}>
                  <p className="blog-post__category">{post.category}</p>
                </Link>
              </div>
            </footer>
          </section>
          <section className="blog-post__right-content">
            <Sidebar />
          </section>
        </div>
      ) : (
        <PuffLoader />
      )}
      <div className="blog-post__wrapper"></div>
    </section>
  );
};

export default BlogPost;
