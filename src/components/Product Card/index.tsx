import { useState } from "react";

interface ProductCardInterface {
    category: string,
    img: string,
    price: string,
    submenu1: string,
    submenu2: string,
}

const ProductCard: React.FC<ProductCardInterface> = (props) => {
    const [activeSubmenu, setActiveSubmenu] = useState("submenu1")

  return (
    <div className="bg-light-gray flex flex-col gap-2 py-7 px-7 max-w-lg rounded-lg shadow-lg">
      <div className="flex justify-between ">
        <h2 className="text-2xl font-semibold">{props.category}</h2>
        <p className="text-base font-light">From €{props.price}</p>
      </div>
      <div className="flex gap-5 font-extralight">
        <p className={ `cursor-pointer ${activeSubmenu === 'submenu1' ? 'font-light' : 'font-extralight text-gray-600'}`}
        onClick={() => setActiveSubmenu('submenu1')}>{props.submenu1}</p>
        <p className={ `cursor-pointer ${activeSubmenu === 'submenu2' ? 'font-light' : 'font-extralight text-gray-600'}`}
        onClick={() => setActiveSubmenu('submenu2')}>{props.submenu2}</p>
      </div>
      <img 
      className="rounded-md"
      src={props.img} alt="Woman with a bike" />
      <div className="flex gap-5 mt-4 items-center">
        <button className="bg-white rounded-3xl py-2 px-4 text-xs">
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
