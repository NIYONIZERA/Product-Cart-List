import { useState } from 'react';
import { ShoppingCart, Minus, Plus } from 'lucide-react';

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    addToCart(product, newQuantity);
  };

  const handleUpdateQuantity = (change) => {
    const newQuantity = Math.max(0, quantity + change);
    setQuantity(newQuantity);
    addToCart(product, newQuantity);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="relative">
        <picture>
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <source media="(min-width: 768px)" srcSet={product.image.tablet} />
          <source media="(max-width: 767px)" srcSet={product.image.mobile} />
          <img
            src={product.image.thumbnail}
            alt={product.name}
            className="w-full h-40 sm:h-48 object-cover rounded-t-xl focus:ring-2 focus:ring-amber-700 focus:outline-none"
          />
        </picture>
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2">
          {quantity === 0 ? (
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center px-4 py-2 bg-white border border-amber-300 text-black text-sm rounded-full shadow-md hover:bg-amber-50 transition focus:ring-2 focus:ring-amber-700 focus:outline-none"
            >
              <ShoppingCart className="w-4 h-4 mr-2  text-amber-700" /> Add to Cart
            </button>
          ) : (
            <div className="flex items-center bg-orange-700 text-white px-4 py-2 rounded-full shadow-md">
              <button
                onClick={() => handleUpdateQuantity(-1)}
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-orange-600 focus:ring-2 focus:ring-amber-700 focus:outline-none"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="mx-4">{quantity}</span>
              <button
                onClick={() => handleUpdateQuantity(1)}
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-orange-600 focus:ring-2 focus:ring-amber-700 focus:outline-none"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xs text-amber-900 uppercase tracking-wide">{product.category}</h2>
        <p className="font-semibold text-black mt-1">{product.name}</p>
        <p className="text-orange-700 font-medium mt-1">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
export default ProductCard;
  