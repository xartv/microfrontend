import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <Link to="/blog/nested">NESTED</Link>
    </>
  );
};

export default Blog;
