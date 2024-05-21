import { CaretLeft, CaretRight, Circle } from "@phosphor-icons/react";
import { useState } from "react";

interface BikeCard {
  title: string;
  price: string;
  photo: string;
  color: string[];
  colorToImage: { [key: string]: string }
}

const BikeCard: React.FC<BikeCard> = (props) => {
    const [colorActive, setColorActive] = useState<string>("#000000")
    const [currentImage, setCurrentImage] = useState<string>(props.photo)

    const handleColorSelection = (color: string) => {
        setColorActive(color)
        setCurrentImage(props.colorToImage[color] || props.photo)
    }

    const handleCaretClick = (direction: 'left' | 'right') => {
        const currentIndex = props.color.indexOf(colorActive);
        let newIndex;
        if (direction === 'left') {
          newIndex = (currentIndex - 1 + props.color.length) % props.color.length;
        } else {
          newIndex = (currentIndex + 1) % props.color.length;
        }
        const newColor = props.color[newIndex];
        handleColorSelection(newColor);
      };

  return (
    <div className="container flex flex-col gap-10 max-w-695 bg-light-gray2 p-8 text-sans items-center rounded-xl">
      <div className="flex justify-between items-center w-full">
        <p className="text-xl font-semibold">{props.title}</p>
        <p className="text-sm font-light">€{props.price} NET/MONTH</p>
      </div>
      <div className="flex items-center gap-5">
        <CaretLeft size={32} weight="bold" onClick={() => handleCaretClick('left')} className="cursor-pointer" />
        <div>
          <img src={currentImage} alt="" className="object-contain" />
        </div>
        <CaretRight size={32} weight="bold" onClick={() => handleCaretClick('right')} className="cursor-pointer"/>
      </div>
      <div className="flex gap-3">
        {props.color.map((item) => (
          <div key={item} 
          className={`flex items-center justify-center w-8 h-8 rounded-full ${colorActive == item ? "border" : ""} border-black cursor-pointer`}
          onClick={() => handleColorSelection(item)}>
            <Circle size={25} color={item} key={item} weight="fill" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikeCard;
