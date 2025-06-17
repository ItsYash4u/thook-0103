
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface BillingData {
  name: string;
  mobile: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

interface BillingFormProps {
  onComplete: (data: BillingData) => void;
}

const BillingForm: React.FC<BillingFormProps> = ({ onComplete }) => {
  const [formData, setFormData] = useState<BillingData>({
    name: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [saveInfo, setSaveInfo] = useState(false);

  const handleInputChange = (field: keyof BillingData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['name', 'mobile', 'email', 'address', 'city', 'state', 'pincode'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof BillingData]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in: ${missingFields.join(', ')}`);
      return;
    }

    if (saveInfo) {
      localStorage.setItem('billingInfo', JSON.stringify(formData));
    }

    onComplete(formData);
  };

  // Load saved info if available
  React.useEffect(() => {
    const savedInfo = localStorage.getItem('billingInfo');
    if (savedInfo) {
      setFormData(JSON.parse(savedInfo));
    }
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number *
            </label>
            <input
              type="tel"
              value={formData.mobile}
              onChange={(e) => handleInputChange('mobile', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter mobile number"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Enter email address"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address *
          </label>
          <textarea
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            rows={3}
            placeholder="Enter complete address"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City *
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="City"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State *
            </label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="State"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pincode *
            </label>
            <input
              type="text"
              value={formData.pincode}
              onChange={(e) => handleInputChange('pincode', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Pincode"
              required
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="saveInfo"
            checked={saveInfo}
            onChange={(e) => setSaveInfo(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="saveInfo" className="text-sm text-gray-700">
            Save this information for future orders
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-black text-white hover:bg-gray-800 h-12 text-lg font-semibold mt-6"
        >
          Continue to Location
        </Button>
      </form>
    </div>
  );
};

export default BillingForm;
