
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state;

  if (!orderDetails) {
    navigate('/products');
    return null;
  }

  const { product, address, paymentMode, orderId, estimatedDelivery, totalAmount } = orderDetails;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">Thank you for your purchase. Your order has been successfully placed.</p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <div className="flex items-center justify-between mb-6 pb-6 border-b">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Order #{orderId}</h2>
              <p className="text-gray-600">Placed on {new Date().toLocaleDateString()}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-black">₹{totalAmount}</p>
              <p className="text-sm text-gray-600">
                Payment: {paymentMode === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
              </p>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex items-start space-x-4 mb-6">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-600">₹{product.price}</p>
              <p className="text-sm text-gray-500">Quantity: 1</p>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Delivery Address</h4>
                  <p className="text-gray-600 text-sm">
                    {address.name}<br />
                    {address.phone}<br />
                    {address.address}<br />
                    {address.city}, {address.state} - {address.pincode}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Estimated Delivery</h4>
                  <p className="text-gray-600 text-sm">{estimatedDelivery}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Package className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Order Status</h4>
                  <p className="text-green-600 text-sm font-medium">Confirmed & Processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <h3 className="text-lg font-semibold mb-6">Order Timeline</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-medium text-gray-900">Order Confirmed</p>
                <p className="text-sm text-gray-600">{new Date().toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-medium text-gray-500">Processing</p>
                <p className="text-sm text-gray-400">We'll update you soon</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-medium text-gray-500">Shipped</p>
                <p className="text-sm text-gray-400">We'll notify you when shipped</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-medium text-gray-500">Delivered</p>
                <p className="text-sm text-gray-400">Expected in {estimatedDelivery}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate('/products')}
            variant="outline"
            className="flex-1 sm:flex-none"
          >
            Continue Shopping
          </Button>
          <Button
            onClick={() => navigate('/')}
            className="flex-1 sm:flex-none bg-black text-white hover:bg-gray-800"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
