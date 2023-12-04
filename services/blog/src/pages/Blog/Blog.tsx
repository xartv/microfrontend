import { blogRoutes } from "@packages/shared/src/routes/blogRoutes";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <Link to={blogRoutes.nested}>NESTED</Link>
    </>
  );
};

export default Blog;
