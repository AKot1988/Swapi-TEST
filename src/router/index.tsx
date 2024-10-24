import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, Not_Found } from "../pages";
// import { useEffect, useState } from "react";
import { commonRouter } from "./commonRouter";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Not_Found />,
      children: [...commonRouter],
      // loader: fetch('https://swapi.dev/api/people/1'),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
