import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../App/store";
import { useEffect } from "react";
import { hidePopUp } from "../../Features/Cart/CartSlice";

const CardPopup: React.FC = () => {
  const showPopup = useSelector((state: RootState) => state.cart.showPopUp);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        dispatch(hidePopUp());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup, dispatch]);

  return (
    showPopup && (
      <div className="absolute top-12 right-16 w- bg-white text-black p-2 rounded shadow-lg">
        {cartItems.map((item) => (
          <div key={item.id} className="flex p-2 w-full">
            <div className="flex gap-2 text-xs justify-between w-full ">
              <img src={item.url} alt="" className="rounded-md w-1/3 object-contain" />
              <div className="flex flex-col">
                <p className="font-bold">{item.name}</p>
                <p>{item.color}</p>
                <p>{item.quantity}</p>
              </div>
            <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default CardPopup;
