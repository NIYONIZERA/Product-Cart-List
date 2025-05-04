import React, { useState } from 'react';
import data from './data/data.json';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Modal from './components/Modal';

function App() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (item, qty) => {
    setCart((prev) => {
      if (qty === 0) {
        return prev.filter((p) => p.name !== item.name);
      }
      const exist = prev.find((p) => p.name === item.name);
      if (exist) {
        return prev.map((p) =>
          p.name === item.name ? { ...p, qty } : p
        );
      } else {
        return [...prev, { ...item, qty }];
      }
    });
  };

  const removeFromCart = (itemName) => {
    setCart((prev) => prev.filter((p) => p.name !== itemName));
  };

  const updateQty = (itemName, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === itemName ? { ...item, qty: Math.max(1, item.qty + amount) } : item
      )
    );
  };

  const resetCart = () => {
    setCart([]);
    setShowModal(false);
  };

  return (
    <main className="p-4 sm:p-6 lg:p-8 bg-amber-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6">Desserts</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 flex-1">
          {data.map((item, index) => (
            <ProductCard key={index} product={item} addToCart={addToCart} />
          ))}
        </div>
        <div className="mt-6 lg:mt-0 lg:w-96">
          <Cart
            cart={cart}
            updateQty={updateQty}
            removeFromCart={removeFromCart}
            confirmOrder={() => setShowModal(true)}
          />
        </div>
      </div>
      {showModal && <Modal cart={cart} onClose={resetCart} />}
    </main>
  );
}

export default App;

