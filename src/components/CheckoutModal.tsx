
import React, { useState } from 'react';
import { X } from 'lucide-react';
import AddressForm from './AddressForm';
import PaymentModal from './PaymentModal';

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
}

interface Address {
  id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  product: Product;
  onOrderComplete: (orderDetails: any) => void;
}

type CheckoutStep = 'address' | 'payment';

const CheckoutModal: React.FC<CheckoutModalProps> = ({ 
  open, 
  onClose, 
  product, 
  onOrderComplete 
}) => {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('address');
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  if (!open) return null;

  const handleAddressSelect = (address: Address) => {
    setSelectedAddress(address);
    setCurrentStep('payment');
  };

  const handlePaymentSelect = (mode: "cod" | "online") => {
    const orderDetails = {
      product,
      address: selectedAddress,
      paymentMode: mode,
      orderId: `TH${Date.now()}`,
      estimatedDelivery: '3-5 business days',
      totalAmount: product.price
    };
    
    onOrderComplete(orderDetails);
    onClose();
  };

  const handleBack = () => {
    if (currentStep === 'payment') {
      setCurrentStep('address');
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">
            {currentStep === 'address' ? 'Select Address' : 'Choose Payment'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Order Summary - Sidebar */}
          <div className="lg:w-1/3 bg-gray-50 p-6 border-r">
            <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 className="font-medium text-gray-900 mb-2">{product.name}</h4>
              <p className="text-2xl font-bold text-black">₹{product.price}</p>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>₹{product.price}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping:</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total:</span>
                  <span>₹{product.price}</span>
                </div>
              </div>
              {selectedAddress && (
                <div className="mt-4 pt-4 border-t">
                  <h5 className="font-medium mb-2">Delivery Address:</h5>
                  <p className="text-sm text-gray-600">
                    {selectedAddress.name}<br />
                    {selectedAddress.address}<br />
                    {selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pincode}
                  </p>
                  <p className="text-sm text-green-600 mt-2">
                    Estimated delivery: 3-5 business days
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-2/3 overflow-y-auto max-h-[60vh]">
            {currentStep === 'address' && (
              <AddressForm
                onAddressSelect={handleAddressSelect}
                onBack={handleBack}
              />
            )}
            {currentStep === 'payment' && (
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <button
                    onClick={handleBack}
                    className="text-gray-600 hover:text-black mr-4"
                  >
                    ← Back
                  </button>
                  <h3 className="text-xl font-semibold">Payment Options</h3>
                </div>
                <PaymentModal
                  open={true}
                  onClose={() => {}}
                  onSelect={handlePaymentSelect}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
