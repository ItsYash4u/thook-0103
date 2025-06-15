
import React from "react";

interface CartDropdownProps {
  products: { id: number; name: string; quantity: number }[];
  onCheckout: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ products, onCheckout }) => {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-2">Cart Items</h3>
        {products.length === 0 ? (
          <div className="text-gray-500 text-sm">Your cart is empty.</div>
        ) : (
          <ul className="mb-3">
            {products.map((item) => (
              <li key={item.id} className="py-1 flex justify-between text-sm">
                <span className="truncate">{item.name}</span>
                <span className="ml-2 text-gray-600">x{item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={onCheckout}
          disabled={products.length === 0}
          className="w-full bg-black text-white rounded-lg py-2 font-semibold mt-2 disabled:opacity-50 hover:bg-gray-800 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;
