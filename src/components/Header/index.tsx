import { ShoppingBag, User } from "@phosphor-icons/react";
import Logo from "../../assets/logo.svg";
import MobileNavBar from "./MobileNav";

const Header = () => {
  return (
    <header className="font-sans">
      <nav className=" bg-white mx-auto lg:flex py-4 px-10 justify-between items-center lg:px-20 hidden">
        <div className=" basis-1/5">
          <img src={Logo} alt="Veloretti" />
        </div>
        <div className="flex basis-2/5">
          <ul className="flex gap-4 text-black">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">City</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex basis-2/5 justify-end gap-10">
          <User size={20} color="#141615" />
          <ShoppingBag size={20} color="#141615" />
        </div>
      </nav>

      <MobileNavBar/>

    </header>
  );
};

export default Header;
