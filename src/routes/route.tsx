import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import AboutUs from "../pages/AboutUs";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />
      },
      {
        path: "login",
        element: <Login />
      }
    ],
  },
]);

export default router;
