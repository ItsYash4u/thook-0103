
import React, { useState, useEffect } from 'react';
import { CreditCard, Truck, Smartphone, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaymentStepProps {
  onComplete: (paymentMethod: string) => void;
  onBack: () => void;
}

const PaymentStep: React.FC<PaymentStepProps> = ({ onComplete, onBack }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [showQR, setShowQR] = useState(false);
  const [qrTimer, setQrTimer] = useState(60);

  useEffect(() => {
    let interval: number;
    if (showQR && qrTimer > 0) {
      interval = setInterval(() => {
        setQrTimer(prev => prev - 1);
      }, 1000);
    } else if (qrTimer === 0) {
      setShowQR(false);
      setQrTimer(60);
    }
    
    return () => clearInterval(interval);
  }, [showQR, qrTimer]);

  const handlePaymentSelect = (method: string) => {
    if (method === 'qr') {
      setShowQR(true);
      setQrTimer(60);
    } else {
      onComplete(method);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showQR) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Scan QR Code to Pay</h2>
          
          <div className="bg-gray-100 p-8 rounded-lg mb-6 inline-block">
            {/* QR Code placeholder - in real app, generate actual QR */}
            <div className="w-48 h-48 bg-white border-2 border-dashed border-gray-400 flex items-center justify-center">
              <QrCode size={64} className="text-gray-400" />
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-lg font-semibold mb-2">Time Remaining</p>
            <div className="text-3xl font-bold text-red-500">
              {formatTime(qrTimer)}
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">
            Scan this QR code with any UPI app like PhonePe, Google Pay, or Paytm
          </p>
          
          <div className="flex gap-3 justify-center">
            <Button
              onClick={() => onComplete('upi-qr')}
              className="bg-green-600 text-white hover:bg-green-700"
            >
              Payment Completed
            </Button>
            <Button
              onClick={() => {
                setShowQR(false);
                setQrTimer(60);
              }}
              variant="outline"
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-black font-medium"
        >
          ← Back
        </button>
        <h2 className="text-2xl font-bold">Payment Options</h2>
      </div>

      <div className="space-y-4">
        {/* Cash on Delivery */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-black transition-colors cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Truck className="text-green-600" size={24} />
              <div>
                <h3 className="font-semibold text-lg">Cash on Delivery</h3>
                <p className="text-gray-600 text-sm">Pay when your order arrives</p>
              </div>
            </div>
            <Button
              onClick={() => handlePaymentSelect('cod')}
              className="bg-green-600 text-white hover:bg-green-700"
            >
              Select COD
            </Button>
          </div>
        </div>

        {/* Online Payment Header */}
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CreditCard size={20} />
            Online Payment Options
          </h3>
        </div>

        {/* UPI */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-black transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Smartphone className="text-blue-600" size={24} />
              <div>
                <h4 className="font-semibold">UPI</h4>
                <p className="text-gray-600 text-sm">PhonePe, Google Pay, Paytm, etc.</p>
              </div>
            </div>
            <Button
              onClick={() => handlePaymentSelect('upi')}
              variant="outline"
            >
              Select UPI
            </Button>
          </div>
        </div>

        {/* Cards */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-black transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CreditCard className="text-purple-600" size={24} />
              <div>
                <h4 className="font-semibold">Debit/Credit Card</h4>
                <p className="text-gray-600 text-sm">Visa, Mastercard, RuPay</p>
              </div>
            </div>
            <Button
              onClick={() => handlePaymentSelect('card')}
              variant="outline"
            >
              Select Card
            </Button>
          </div>
        </div>

        {/* Net Banking */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-black transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">₹</span>
              </div>
              <div>
                <h4 className="font-semibold">Net Banking</h4>
                <p className="text-gray-600 text-sm">All major banks supported</p>
              </div>
            </div>
            <Button
              onClick={() => handlePaymentSelect('netbanking')}
              variant="outline"
            >
              Select Banking
            </Button>
          </div>
        </div>

        {/* QR Code Payment */}
        <div className="border border-gray-200 rounded-lg p-4 hover:border-black transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <QrCode className="text-indigo-600" size={24} />
              <div>
                <h4 className="font-semibold">Scan & Pay</h4>
                <p className="text-gray-600 text-sm">Quick QR code payment</p>
              </div>
            </div>
            <Button
              onClick={() => handlePaymentSelect('qr')}
              className="bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Request QR
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          🔒 Your payment information is secure and encrypted
        </p>
      </div>
    </div>
  );
};

export default PaymentStep;
