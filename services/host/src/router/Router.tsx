import { App } from "@/components/App";
import { createBrowserRouter } from "react-router-dom";
// @ts-ignore
import blogRoutes from 'blog/Router'
// @ts-ignore
import adminRoutes from 'admin/Router'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...blogRoutes,
      ...adminRoutes
    ],
  },
]);
