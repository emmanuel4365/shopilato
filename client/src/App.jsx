import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as productLoader } from "./pages/ProductDetailsPage";

import {
  HomePage,
  ErrorPage,
  LandingPage,
  CartPage,
  ProductDetailsPage,
} from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/product/:id",
          element: <ProductDetailsPage />,
          loader: productLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
