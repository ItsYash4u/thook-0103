
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPin, CreditCard, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import BillingForm from '../components/BillingForm';
import LocationStep from '../components/LocationStep';
import PaymentStep from '../components/PaymentStep';

type CheckoutStep = 'billing' | 'location' | 'payment';

interface BillingData {
  name: string;
  mobile: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

interface LocationData {
  latitude?: number;
  longitude?: number;
  address: string;
  manualAddress?: string;
}

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('billing');
  const [billingData, setBillingData] = useState<BillingData | null>(null);
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  
  const cartItems = location.state?.items || [];
  const totalAmount = location.state?.total || 0;

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleBillingComplete = (data: BillingData) => {
    setBillingData(data);
    setCurrentStep('location');
  };

  const handleLocationComplete = (data: LocationData) => {
    setLocationData(data);
    setCurrentStep('payment');
  };

  const handlePaymentComplete = (paymentMethod: string) => {
    const orderData = {
      items: cartItems,
      billing: billingData,
      location: locationData,
      payment: paymentMethod,
      total: totalAmount,
      orderId: `TH${Date.now()}`,
      timestamp: new Date().toISOString()
    };

    // Clear cart
    localStorage.removeItem('cartItems');
    
    // Navigate to order confirmation
    navigate('/order-confirmation', { state: orderData });
  };

  const steps = [
    { id: 'billing', label: 'Billing Details', icon: Truck, active: currentStep === 'billing', completed: billingData !== null },
    { id: 'location', label: 'Location', icon: MapPin, active: currentStep === 'location', completed: locationData !== null },
    { id: 'payment', label: 'Payment', icon: CreditCard, active: currentStep === 'payment', completed: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <span className="font-hero text-2xl font-black tracking-[0.1em] text-black">
            THOOK
          </span>
          <span className="text-lg font-semibold">Secure Checkout</span>
        </div>
      </header>

      <div className="pt-20 max-w-6xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step.completed ? 'bg-green-500 text-white' : 
                  step.active ? 'bg-black text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  <step.icon size={20} />
                </div>
                <span className={`ml-2 font-medium ${
                  step.active ? 'text-black' : 'text-gray-500'
                }`}>
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 ml-4 ${
                    step.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 'billing' && (
              <BillingForm onComplete={handleBillingComplete} />
            )}
            {currentStep === 'location' && (
              <LocationStep onComplete={handleLocationComplete} onBack={() => setCurrentStep('billing')} />
            )}
            {currentStep === 'payment' && (
              <PaymentStep onComplete={handlePaymentComplete} onBack={() => setCurrentStep('location')} />
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            
            <div className="space-y-3 mb-4">
              {cartItems.map((item: any) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
