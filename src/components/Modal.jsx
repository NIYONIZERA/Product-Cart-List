
import { CheckCircle } from 'lucide-react';

function Modal({ cart, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-md">
        <div className="flex items-center gap-2 text-green-600 mb-2">
          <CheckCircle className="w-5 h-5" />
          <h2 className="text-xl font-bold text-black">Order Confirmed</h2>
        </div>
        <p className="text-amber-900">We hope you enjoy your food!</p>
        <div className="mt-4 space-y-2">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={item.image.thumbnail}
                  alt={item.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-md mr-2"
                />
                <div>
                  <p className="font-medium text-black">{item.name}</p>
                  <p className="text-sm text-amber-900">
                    <strong className='text-amber-500'>{item.qty}x</strong> @ ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <p className="text-black font-medium">
                ${(item.price * item.qty).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 flex justify-between text-black font-semibold">
          <span>Order Total</span>
          <span>${total}</span>
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-orange-700 text-white px-4 py-2 rounded-full hover:bg-orange-800 transition"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
export default Modal;

  