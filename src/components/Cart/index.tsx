import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../App/store";
import { removeFromCart, updateQuantity } from "../../Features/Cart/CartSlice";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (
    id: number,
    color: string,
    quantity: number
  ) => {
    dispatch(updateQuantity({ id, color, quantity }));
  };

  const handleRemoveFromCart = (id: number, color: string) => {
    dispatch(removeFromCart({ id, color }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Product</th>
              <th className="py-2">Color</th>
              <th className="py-2">Price</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Total</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={`${item.id}-${item.color}`} className="text-center">
                <td className="py-2">
                  <div className="flex flex-col items-center">
                    <img src={item.url} alt={`Image of ${item.name}`} className="rounded-md" />
                    {item.name}</div>
                </td>
                <td className="py-2">{item.color}</td>
                <td className="py-2">{item.price}</td>
                <td className="py-2">
                  <input
                    className="border border-gray-300 p-1 w-16 bg-white rounded-md"
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.id,
                        item.color,
                        parseInt(e.target.value)
                      )
                    }
                  />
                </td>
                <td className="py-2">${item.price * item.quantity}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleRemoveFromCart(item.id, item.color)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
