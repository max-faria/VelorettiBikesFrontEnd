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
      <div>
        {cartItems.map((item) =>(
            <div key={item.id}>
                <img src={item.url} alt="" />
                <p>{item.name}</p>
                <p>{item.color}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
            </div>
        ))}
      </div>
    )
  );
};

export default CardPopup;
