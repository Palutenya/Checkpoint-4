import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nothing from "./pages/Nothing";
import Accueil from "./pages/Accueil";
import App from "./App";
import Inscription from "./pages/Inscription"; // Fixed import

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "nothing",
        element: <Nothing />,
      },
      {
        path: "inscription", // Add new route
        element: <Inscription />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
