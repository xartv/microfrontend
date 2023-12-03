import { App } from "@/components/App";
import { Blog } from "@/pages/Blog";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/blog",
    element: <App />,
    children: [
      {
        path: "/blog/main",
        element: (
          <Suspense fallback={"LOADING"}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/blog/nested",
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
