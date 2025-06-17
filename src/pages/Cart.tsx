
import React, { useState, useEffect } from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    
    toast({
      title: "Item Removed",
      description: "Product has been removed from your cart.",
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Add some products to your cart first.",
        variant: "destructive"
      });
      return;
    }
    navigate('/checkout', { state: { items: cartItems, total: getTotalPrice() } });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <ShoppingBag className="mx-auto mb-4 text-gray-400" size={64} />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products yet.</p>
            <Button
              onClick={() => navigate('/products')}
              className="bg-black text-white hover:bg-gray-800"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <span className="font-hero text-2xl font-black tracking-[0.1em] text-black">
            THOOK
          </span>
          <Button
            onClick={() => navigate('/products')}
            variant="ghost"
            className="text-black"
          >
            Continue Shopping
          </Button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center p-6 border-b border-gray-200 last:border-b-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              
              <div className="flex-1 ml-4">
                <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                {item.size && (
                  <p className="text-sm text-gray-500 mb-2">Size: {item.size}</p>
                )}
                <p className="text-lg font-bold text-black">₹{item.price}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
            <span className="text-2xl font-bold text-black">₹{getTotalPrice()}</span>
          </div>
          
          <div className="flex justify-between items-center mb-4 text-sm">
            <span>Shipping</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>
          
          <div className="border-t pt-4 flex justify-between items-center">
            <span className="text-xl font-bold">Total</span>
            <span className="text-2xl font-bold text-black">₹{getTotalPrice()}</span>
          </div>
          
          <Button
            onClick={handleCheckout}
            className="w-full mt-6 bg-black text-white hover:bg-gray-800 h-12 text-lg font-semibold"
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
