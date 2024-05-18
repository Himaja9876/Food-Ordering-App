import { useSelector, useDispatch } from "react-redux";
import CategoryList from "./CategoryList";
import { clearCart } from "../utils.js/cartSlice";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div>
      <h1 className="text-center font-bold text-sm p-4">Cart</h1>
      <div className="w-6/12 m-auto">
        <button className="text-center h-6 w-20 font-bold text-xs bg-slate-500 rounded" onClick={handleClearCart}>
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Cart is Empty</h1>}
        <CategoryList itemsList={cartItems} />
      </div>
    </div>
  )
}

export default Cart;