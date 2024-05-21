import { CaretLeft, CaretRight, Circle } from "@phosphor-icons/react";

interface BikeCard {
    title: string,
    price: string,
    photo: string,
    color: string[],
}

const BikeCard:React.FC<BikeCard> = (props) => {
  return (
    <div className="container flex flex-col gap-10 max-w-695 bg-light-gray2 p-8 text-sans items-center rounded-xl">
      <div className="flex justify-between items-center w-full">
        <p className="text-xl">{props.title}</p>
        <p className="text-xs font-thin">€{props.price} NET/MONTH</p>
      </div>
      <div className="flex items-center gap-5">
        <CaretLeft size={32} weight="bold" />
        <div>
          <img src={props.photo} alt="" className="object-contain" />
        </div>
        <CaretRight size={32} weight="bold" />
      </div>
      <div className="flex gap-3">
        {props.color.map((item) => (
            <Circle size={25} color={item} key={item} weight="fill"/>
        ))}
      </div>
    </div>
  );
};

export default BikeCard;
