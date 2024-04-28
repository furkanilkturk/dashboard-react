import { createBrowserRouter } from "react-router-dom";
import Layout from "~/pages/Layout";
import ErrorPage from "~/pages/ErrorPage";
import Products from "~/pages/Products";
import Settings from "~/pages/Settings";

import Dashboard from "~/pages/Dashboard";
import Team from "~/pages/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard />, index: true },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
export default router;
