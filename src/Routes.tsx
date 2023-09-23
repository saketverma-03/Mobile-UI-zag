import { Outlet, createBrowserRouter } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductdetailsPage from "./pages/ProductdetailsPaeg";
import Layout from "./pages/layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/productdetails",
        element: <ProductdetailsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/fav",
        element: (
          <h1 className="p-4 m-4 text-center bg-indigo-300 text-black">fav</h1>
        ),
      },
    ],
  },
]);

export { routes };
