
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

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

interface AddressFormProps {
  onAddressSelect: (address: Address) => void;
  onBack: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onAddressSelect, onBack }) => {
  const [savedAddresses] = useState<Address[]>([
    {
      id: '1',
      name: 'John Doe',
      phone: '+91 9876543210',
      address: '123 Main Street, Apartment 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      isDefault: true
    }
  ]);

  const [showNewForm, setShowNewForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const address: Address = {
      id: Date.now().toString(),
      ...newAddress,
      isDefault: false
    };
    onAddressSelect(address);
  };

  const handleSavedAddressSelect = (address: Address) => {
    onAddressSelect(address);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          ← Back
        </Button>
        <h2 className="text-2xl font-bold">Delivery Address</h2>
      </div>

      {!showNewForm && (
        <div className="space-y-4 mb-6">
          <h3 className="text-lg font-semibold">Saved Addresses</h3>
          {savedAddresses.map((address) => (
            <div
              key={address.id}
              className="border rounded-lg p-4 cursor-pointer hover:border-black transition-colors"
              onClick={() => handleSavedAddressSelect(address)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">{address.name}</p>
                  <p className="text-sm text-gray-600">{address.phone}</p>
                  <p className="text-sm text-gray-700 mt-1">
                    {address.address}, {address.city}, {address.state} - {address.pincode}
                  </p>
                  {address.isDefault && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-2">
                      Default
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          <Button
            variant="outline"
            onClick={() => setShowNewForm(true)}
            className="w-full"
          >
            + Add New Address
          </Button>
        </div>
      )}

      {showNewForm && (
        <form onSubmit={handleAddressSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={newAddress.name}
                onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                value={newAddress.phone}
                onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Address *</label>
            <textarea
              required
              value={newAddress.address}
              onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              rows={3}
              placeholder="House No, Building, Street, Area"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">City *</label>
              <input
                type="text"
                required
                value={newAddress.city}
                onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State *</label>
              <input
                type="text"
                required
                value={newAddress.state}
                onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Pincode *</label>
              <input
                type="text"
                required
                value={newAddress.pincode}
                onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowNewForm(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-black text-white hover:bg-gray-800">
              Deliver Here
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddressForm;
