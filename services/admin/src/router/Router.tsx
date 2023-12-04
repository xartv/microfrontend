import { App } from "@/components/App";
import { Admin } from "@/pages/Admin";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/routes/adminRoutes";

const routes = [
  {
    path: adminRoutes.admin,
    element: <App />,
    children: [
      {
        path: adminRoutes.admin,
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
