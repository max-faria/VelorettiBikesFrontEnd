import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import AboutUs from "../pages/AboutUs";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import RecoverPassword from "../pages/RecoverPassword";
import ResetPassword from "../pages/ResetPassword";

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
      },
      {
        path: "singup",
        element: <Singup />
      },
      {
        path: "recover-password",
        element: <RecoverPassword />
      },
    ],
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  }
]);

export default router;
