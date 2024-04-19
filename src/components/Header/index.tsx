import { List, ShoppingBag, User } from "@phosphor-icons/react";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const menuVariants = {
  hidden: { y: "-100%",
    transition: {
      delay: 0.3,
      // when: "afterChildren"
      staggerChildren: 0.08
    }
   },
  visible: {
    y: "0",
    transition: {
      duration: 0.3,
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const item = {
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      duration: 0.3,
    },
  },
  hidden: { opacity: 0, y: "-20%" },
};



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

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

      <nav className="h-6vh bg-white py-3 px-6 flex justify-between items-center z-20 lg:hidden">
        <div>
          <img src={Logo} alt="Veloretti" />
        </div>
        <div>
          <List size={32} color="#3c2256" onClick={toggleMenu} />
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="bg-white h-94vh flex flex-col justify-between py-10">
              <ul className="flex flex-col items-center gap-20 text-black text-5xl">
                <motion.li variants={item}>
                  <a href="" onClick={toggleMenu}>Home</a>
                </motion.li>
                <motion.li variants={item}>
                  <a href="" onClick={toggleMenu}>Products</a>
                </motion.li>
                <motion.li variants={item}>
                  <a href="" onClick={toggleMenu}>City</a>
                </motion.li>
                <motion.li variants={item}>
                  <a href="" onClick={toggleMenu}>About Us</a>
                </motion.li>
                <motion.li variants={item}>
                  <a href="" onClick={toggleMenu}>Contact</a>
                </motion.li>
              </ul>
              <motion.div className="flex justify-around" variants={item}>
                <User size={50} color="#141615" onClick={toggleMenu} />
                <ShoppingBag size={50} color="#141615" onClick={toggleMenu}/>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Header;
