import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setpayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map(
      (item) => {
        price += item.price * item.quantity;
        return price;
      },
      [productData]
    );
    setTotalAmt(price.toFixed(2));
  });

  const handleCheckOut = () => {
    if (userInfo) {
      setpayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-slate-100 py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal:
              <span className="font-titleFont font-bold text-lg">
                $ {totalAmt}
              </span>
            </p>
            <p className="flex items-center gap-4  text-base">
              Shipping:
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto .
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total: <span className="text-xl font-bold">$ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckOut}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            proceed to checkout
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
