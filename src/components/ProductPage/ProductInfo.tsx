import {
  faArrowDown,
  faCheckCircle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IvyThumbnail from "../../assets/thumbnail-ivy.png";
import AceThumbnail from "../../assets/thumbnail-ace.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Product, addToCart } from "../../Features/Cart/CartSlice";

// type CheckboxState = {
//     [key: string]: boolean;
// }

type CheckboxKey = "checkbox1" | "checkbox2" | "checkbox3";

const ProductInfo: React.FC = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState<CheckboxKey | null>(
    "checkbox1"
  );
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id: 2,
    name: "Electric Ivy",
    color: "Matte Black",
    price: 3299,
  });

  //   const [checkboxes, setCheckboxes] = useState<CheckboxState>({
  //     checkbox1: true,
  //     checkbox2: false,
  //     checkbox3: false,
  //   });

  const handleColorChange = (color: string) => {
    setSelectedProduct(prevProduct => ({...prevProduct, color}));
  };

  const handleModelChange = (model: string, id: number, price: number) => {
    setSelectedProduct({ name: model, id, color: selectedProduct.color, price });
  };

  const handleAddToCart = (product: Product) => {
    console.log(product);
    dispatch(addToCart(product));
  };

  const toggleCheckbox = (checkbox: CheckboxKey) => {
    setSelectedCheckbox(checkbox);
  };

  return (
    <div className="md:w-1/2 flex flex-col justify-between mt-6 md:mt-0 md:ml-6 md:px-14 antialiased">
      <div className="flex justify-between pt-16">
        <h1 className="text-2xl font-normal flex items-start">
          Electric Ivy <span className="text-xs ml-1">Two</span>
        </h1>
        <p className="text-2xl font-normal text-gray-700">€ 3.299</p>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex gap-4 mb-6">
          <div
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => handleModelChange("Eletric Ace", 1, 3599)}
          >
            <img 
            className={`rounded-md ${selectedProduct.id == 1 ? 'border-black border-2' : ''}`} 
            src={AceThumbnail} 
            alt="Bike Ace" />
            <p className="text-sm">Electric Ace</p>
          </div>
          <div
            onClick={() => handleModelChange("Eletric Ivy", 2, 3299)}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <img
              className={`rounded-md ${selectedProduct.id == 2 ? 'border-black border-2' : ''} `}
              src={IvyThumbnail}
              alt="Bike Ivy"
            />
            <p className="text-sm">Electric Ivy</p>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="matte-black" className="text-gray-700 text-md my-2">
            Ivy Two Matte Black
          </label>
          <div className="flex gap-3 ">
            <FontAwesomeIcon
              icon={selectedCheckbox == "checkbox1" ? faCheckCircle : faCircle}
              onClick={() => {
                toggleCheckbox("checkbox1");
                handleColorChange("Matte Black");
              }}
              className={`mr-2 cursor-pointer text-black`}
            />
            <FontAwesomeIcon
              icon={selectedCheckbox == "checkbox2" ? faCheckCircle : faCircle}
              onClick={() => {
                toggleCheckbox("checkbox2");
                handleColorChange("Green Musgos");
              }}
              className={`mr-2 cursor-pointer text-green-900`}
            />
            <FontAwesomeIcon
              icon={selectedCheckbox == "checkbox3" ? faCheckCircle : faCircle}
              onClick={() => {
                toggleCheckbox("checkbox3");
                handleColorChange("Silver Pink");
              }}
              className={`mr-2 cursor-pointer text-pink-200`}
            />
          </div>
        </div>
        <hr />
        <p className="text-gray-600 text-sm font-normal my-5">
          3 interest-free payments with{" "}
          <span className="font-semibold">Klama</span>.
        </p>
        <p className="text-gray-500 text-sm mb-7">
          The Ivy Two is a step-through frame electric bike combining design,
          advanced technology, and safety features. Rider height: between 164
          and 184cm.
        </p>
        <div className="flex flex-col">
          <button className="inline-flex w-2/5 justify-center items-center bg-gray-200 text-black font-normal py-2 px-4 rounded-full mb-4 text-sm hover:bg-gray-400">
            Scroll to Specifications
            <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
          </button>
          <button
            onClick={() => handleAddToCart(selectedProduct)}
            className="bg-black text-white py-5 px-4 rounded-full mb-4 hover:bg-gray-800"
          >
            Customize now
          </button>
        </div>
        <hr className="mt-3 mb-2" />
        <div>
          <p className="text-gray-700 text-sm font-semibold mb-2">
            Shipping to the Netherlands, Belgium & Germany only.
          </p>
          <p className="text-gray-700 text-sm">
            Delivery time: 5-15 business days
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
