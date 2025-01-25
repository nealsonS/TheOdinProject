import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartProvider from "./components/CartProvider.jsx";
import ImgLinkProvider from "./components/ImgLinkProvider.jsx";
import routes from "./routes.jsx";
import "./styles/layout.css";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImgLinkProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ImgLinkProvider>
  </StrictMode>,
);
