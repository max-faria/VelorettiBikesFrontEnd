import { ShoppingBag, User } from "@phosphor-icons/react";
import Logo from "../../assets/logo.svg";
import MobileNavBar from "./MobileNav";
import { Link, useLocation } from "react-router-dom";
import CardPopup from "../CartPopuP";
// import ThemeToggle from "../ToggleTheme";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="font-sans">
      <nav
        className={`${
          path === "/about-us" ? "bg-transparent" : "bg-white"
        }  mx-auto lg:flex py-3 px-10 justify-between items-center lg:px-20 hidden w-full`}
      >
        <div className=" basis-1/5">
          <img src={Logo} alt="Veloretti" />
        </div>
        <div className="flex basis-2/5">
          <ul className="flex gap-8 text-black">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product/ivy">Products</Link>
            </li>
            <li>
              <Link to="/city">City</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex basis-2/5 justify-end gap-10">
          <Link to="/login">
            <User size={20} color="#141615" />
          </Link>
          <Link to="/cart">
            <ShoppingBag size={20} color="#141615" />
          </Link>
          {/* <ThemeToggle/> */}
        </div>
          <CardPopup />
      </nav>

      <MobileNavBar />
    </header>
  );
};

export default Header;
