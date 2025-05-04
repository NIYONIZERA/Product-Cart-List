
import { X, Leaf } from 'lucide-react';

function Cart({ cart, updateQty, removeFromCart, confirmOrder }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md w-full">
      <h2 className="text-xl font-bold text-amber-600 mb-4">Your Cart ({cart.length})</h2>
      {cart.length === 0 ? (
        <div className="text-center">
          <img
            src="/assets/images/empty-cart.png"
            alt="Empty Cart"
            className="mx-auto mb-4 w-24"
          />
          <p className="text-sm text-amber-900">Your added items will appear here</p>
        </div>
      ) : (
        <div className="space-y-4 ">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-t border-amber-200">
              <div>
                <p className="font-medium text-black">{item.name}</p>
                <p className="text-sm text-amber-900 ">
                 <strong className='text-amber-600 '> {item.qty}x</strong> @ ${item.price.toFixed(2)} ${(item.price * item.qty).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.name)}
                className="text-amber-500 hover:text-amber-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-amber-200">
            <p className="flex justify-between text-black font-semibold">
              <span>Order Total</span>
              <strong>${total}</strong>
            </p>
            <p className="text-sm text-amber-950 mt-2 flex items-center">
              <Leaf className="w-4 h-4 mr-1 text-green-500" /> This is a <strong className='px-1'>carbon-neutral</strong> delivery
            </p>
            <button
              onClick={confirmOrder}
              className="mt-4 w-full bg-orange-700 text-white px-4 py-2 rounded-full hover:bg-orange-800 transition"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
  
  