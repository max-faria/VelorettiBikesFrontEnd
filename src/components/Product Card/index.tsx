import { useState } from "react";

interface ProductCardInterface {
  category: string;
  img: string;
  price: string;
  submenu1?: string;
  submenu2?: string;
}

const ProductCard: React.FC<ProductCardInterface> = (props) => {
  const [activeSubmenu, setActiveSubmenu] = useState("submenu1");

  return (
    <div className="bg-light-gray flex flex-col gap-2 py-5 px-5 max-w-lg lg:p-7 rounded-lg shadow-lg sm:hover:scale-105 sm:ease-in-out sm:duration-300 my-5 mx-5 md:my-10 md:mx-10">
      
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <h2 className="text-md font-semibold lg:text-xl">{props.category}</h2>
        <p className="text-xs font-light lg:text-base">From €{props.price}</p>
      </div>

      <div className="flex gap-5 font-light text-xs lg:text-base">
        <p
          className={`cursor-pointer ${
            activeSubmenu === "submenu1"
              ? "font-light"
              : "font-extralight text-gray-600"
          }`}
          onClick={() => setActiveSubmenu("submenu1")}
        >
          {props.submenu1}
        </p>
        <p
          className={`cursor-pointer ${
            activeSubmenu === "submenu2"
              ? "font-light"
              : "font-extralight text-gray-600"
          }`}
          onClick={() => setActiveSubmenu("submenu2")}
        >
          {props.submenu2}
        </p>
      </div>

      <img className="rounded-md" src={props.img} alt="Woman with a bike" />

      <div className="flex gap-5 mt-4 items-center">
        <button className="bg-neutral-200 rounded-3xl py-2 px-2 text-xs lg:px-3">
          Buy Now
        </button>
        <a href="" className="text-xs underline">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
