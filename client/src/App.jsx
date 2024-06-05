import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, ErrorPage, LandingPage } from "./pages";

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
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
