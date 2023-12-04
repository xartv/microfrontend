import { App } from "@/components/App";
import { Blog } from "@/pages/Blog";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { blogRoutes } from "@packages/shared/src/routes/blogRoutes";

const routes = [
  {
    path: "/blog",
    element: <App />,
    children: [
      {
        path: blogRoutes.main,
        element: (
          <Suspense fallback={"LOADING"}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: blogRoutes.nested,
        element: (
          <Suspense fallback={"LOADING"}>
            <div style={{ color: "blue" }}>NESTED</div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
