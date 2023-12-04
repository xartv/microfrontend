import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/routes/adminRoutes";
import { blogRoutes } from "@packages/shared/src/routes/blogRoutes";
import { useAppSelector } from "@packages/shared/src/store/store";
import { getCount } from "@packages/shared/src/store/selectors/getCount";

export const App = () => {
  const count = useAppSelector(getCount);

  return (
    <div>
      <h1>HOST</h1>
      <br />
      <div>HOST COUNTER: {count}</div>
      <Link to={adminRoutes.admin}>Admin</Link>
      <br />
      <Link to={blogRoutes.main}>Blog</Link>

      <Outlet />
    </div>
  );
};
