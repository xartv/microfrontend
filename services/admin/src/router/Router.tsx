import { App } from "@/components/App";
import { Admin } from "@/pages/About";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: (
          <Suspense fallback={"LOADING"}>
            <Admin />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
