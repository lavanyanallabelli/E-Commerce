import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";

import { WomenPage } from "./Components/pages/Women.jsx";
import { MenPage } from "./Components/pages/Men.jsx";
import { BabyPage } from "./Components/pages/Baby.jsx";
import { BeautyPage } from "./Components/pages/Beauty.jsx";
import { HomePage } from "./Components/pages/Home.jsx";
import { KidsPage } from "./Components/pages/Kids.jsx";
import { SalePage } from "./Components/pages/Sale.jsx";

import { Women } from "./Components/internalComponents/Women.jsx";

import { ProductPage } from "./Components/internalComponents/ProductPage.jsx";

import ErrorPage from "./error-page";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "women",
    element: <WomenPage />,
  },
  {
    path: "men",
    element: <MenPage />,
  },
  {
    path: "baby",
    element: <BabyPage />,
  },
  {
    path: "kids",
    element: <KidsPage />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "beauty",
    element: <BeautyPage />,
  },
  {
    path: "sale",
    element: <SalePage />,
  },
  {
    path: "women/new-arrivals/view-all",
    element: <Women />,
  },
  {
    path: "women/new-arrivals/view-all/productPage.1",
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
