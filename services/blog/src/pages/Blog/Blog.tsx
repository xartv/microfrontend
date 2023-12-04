import { blogRoutes } from "@packages/shared/src/routes/blogRoutes";
import { Link } from "react-router-dom";
import { counterActions } from "@packages/shared/src/store/slice/counterSlice";
import { useAppDispatch } from "@packages/shared/src/store/store";
import { useAppSelector } from "@packages/shared/src/store/store";
import { getCount } from "@packages/shared/src/store/selectors/getCount";

const Blog = () => {
  const dispatch = useAppDispatch();

  const count = useAppSelector(getCount);

  const reset = () => dispatch(counterActions.reset());

  return (
    <>
      <div>BLOG COUNTER: {count}</div>
      <button onClick={reset}>RESET COUNTER</button>
      <br />
      <br />
      <br />
      <Link to={blogRoutes.nested}>GO TO NESTED ROUTE</Link>
    </>
  );
};

export default Blog;
