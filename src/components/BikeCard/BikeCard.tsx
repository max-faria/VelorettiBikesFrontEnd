import { CaretLeft, CaretRight, Circle } from "@phosphor-icons/react";
import EletricAce from "../../assets/eletricace.png";

const BikeCard = () => {
  return (
    <div className="container flex flex-col gap-10 max-w- bg-light-gray2 p-8 text-sans items-center">
      <div className="flex justify-between items-center w-full">
        <p className="text-xl">Electric Ace</p>
        <p className="text-xs font-thin">€69,07 NET/MONTH</p>
      </div>
      <div className="flex items-center gap-5">
        <CaretLeft size={32} weight="bold" />
        <div>
          <img src={EletricAce} alt="" className="object-contain" />
        </div>
        <CaretRight size={32} weight="bold" />
      </div>
      <div className="flex gap-3">
      <Circle size={25} color="#000000" weight="fill" />
      <Circle size={25} color="#606160" weight="fill" />
      <Circle size={25} color="#DDD9CD" weight="fill" />
      </div>
    </div>
  );
};

export default BikeCard;
