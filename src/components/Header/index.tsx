import { ShoppingBag, User } from "@phosphor-icons/react";
import Logo from "../../assets/logo.svg";
import MobileNavBar from "./MobileNav";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="font-sans">
      <nav
        className={`${
          path === "/about-us" ? "bg-transparent" : "bg-white"
        } absolute mx-auto lg:flex py-3 px-10 justify-between items-center lg:px-20 hidden w-full`}
      >
        <div className=" basis-1/5">
          <img src={Logo} alt="Veloretti" />
        </div>
        <div className="flex basis-2/5">
          <ul className="flex gap-8 text-black">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">City</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="">Contact</a>
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
        </div>
      </nav>

      <MobileNavBar />
    </header>
  );
};

export default Header;
