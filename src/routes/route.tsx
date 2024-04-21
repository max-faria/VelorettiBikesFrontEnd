import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import AboutUs from "../components/pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
