import App from "./pages/App";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default routes;
