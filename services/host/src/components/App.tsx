import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/routes/adminRoutes";
import { blogRoutes } from "@packages/shared/src/routes/blogRoutes";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <div data-testid="App.DataTestId">
      <h1>PAGE</h1>
      <Link to={adminRoutes.admin}>Admin</Link>
      <br />
      <Link to={blogRoutes.main}>Blog</Link>

      <Outlet />
    </div>
  );
};
