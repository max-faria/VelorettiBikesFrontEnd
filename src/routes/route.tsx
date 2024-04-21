import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import AboutUs from "../components/pages/AboutUs";
import ErrorPage from "../components/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
