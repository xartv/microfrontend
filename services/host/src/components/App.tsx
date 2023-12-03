import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <div data-testid="App.DataTestId">
      <h1>PAGE</h1>
      <Link to="/admin">Admin</Link>
      <br />
      <Link to="/blog/main">Blog</Link>

      <Outlet />
    </div>
  );
};
