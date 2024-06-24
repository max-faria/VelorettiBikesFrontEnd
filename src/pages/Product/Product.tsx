import ProductImage from "../../components/ProductPage/ProductImage";
import ProductInfo from "../../components/ProductPage/ProductInfo";

import Ivy from "../../assets/IvyProduct.png";

const IvyProductPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white p-6 shadow-lg">
        <ProductImage img={Ivy} />
        <ProductInfo />
      </div>
    </div>
  );
};

export default IvyProductPage;
