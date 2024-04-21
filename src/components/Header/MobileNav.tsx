import { ShoppingBag, User } from "@phosphor-icons/react";
import Logo from "../../assets/logo.svg";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";

const menuVariants = {
  hidden: {
    y: "-100%",
    transition: {
      delay: 0.3,
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },
  visible: {
    y: "0",
    transition: {
      duration: 0.3,
      delayChildren: 0.2,
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

const MobileNavBar: React.FC = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  return (
    <nav className="absolute flex justify-between bg-transparent flex-col lg:hidden z-50 w-full">
      <div className="relative py-4 px-6 flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="Veloretti" />
          </Link>
        </div>
        <div className="flex items-center relative z-10">
          <AnimatePresence>
            <motion.button
              animate={mobileNav ? "open" : "closed"}
              className=" flex-col space-y-1.5"
              onClick={() => toggleMobileNav()}
            >
              <motion.span
                variants={{
                  closed: {
                    rotate: 0,
                    y: 0,
                    backgroundColor: "#09090b",
                    transition: { delay: 0.2 },
                  },
                  open: { rotate: 45, y: 8, backgroundColor: "#D4D4D4" },
                }}
                className={`w-6 h-0.5 block`}
              ></motion.span>
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-6 h-0.5 bg-black/80 block"
              ></motion.span>
              <motion.span
                variants={{
                  closed: {
                    rotate: 0,
                    y: 0,
                    backgroundColor: "#09090b",
                    transition: { delay: 0.2 },
                  },
                  open: { rotate: -45, y: -8, backgroundColor: "#D4D4D4" },
                }}
                className={`w-6 h-0.5 block`}
              ></motion.span>
            </motion.button>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {mobileNav && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed bg-zinc-900 inset-0"
          >
            <div className="flex flex-col justify-around py-20 items-center h-full gap-20">
              <div className="">
                <ul className="flex flex-col gap-20 text-5xl items-center text-neutral-300">
                  <motion.li onClick={() => toggleMobileNav()} variants={item}>
                    <Link to={"/"}>Home</Link>
                  </motion.li>

                  <motion.li onClick={() => toggleMobileNav()} variants={item}>
                    Products
                  </motion.li>

                  <motion.li onClick={() => toggleMobileNav()} variants={item}>
                    City
                  </motion.li>

                  <motion.li onClick={() => toggleMobileNav()} variants={item}>
                    <Link to={`about-us`}>About Us</Link>
                  </motion.li>

                  <motion.li onClick={() => toggleMobileNav()} variants={item}>
                    Contact
                  </motion.li>
                </ul>
              </div>
              <motion.div variants={item} className="flex gap-20">
                <User
                  size={50}
                  color="white"
                  onClick={() => toggleMobileNav()}
                />
                <ShoppingBag
                  size={50}
                  color="white"
                  onClick={() => toggleMobileNav()}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavBar;
