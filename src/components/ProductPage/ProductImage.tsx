
interface ProductImgInterface {
    img: string
}

const ProductImage:React.FC<ProductImgInterface> = (props) => {
  return (
    <div className="md:w-1/2 flex justify-center items-center">
      <img
        src={props.img}
        alt="Electric Ivy Two"
        className="rounded-lg max-w-full h-auto"
      />
    </div>
  );
};

export default ProductImage;
