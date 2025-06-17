
import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface LocationData {
  latitude?: number;
  longitude?: number;
  address: string;
  manualAddress?: string;
}

interface LocationStepProps {
  onComplete: (data: LocationData) => void;
  onBack: () => void;
}

const LocationStep: React.FC<LocationStepProps> = ({ onComplete, onBack }) => {
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [manualAddress, setManualAddress] = useState('');
  const [useManualAddress, setUseManualAddress] = useState(false);
  const { toast } = useToast();

  const getCurrentLocation = () => {
    setIsGettingLocation(true);
    
    if (!navigator.geolocation) {
      toast({
        title: "Geolocation not supported",
        description: "Please enter your address manually.",
        variant: "destructive"
      });
      setIsGettingLocation(false);
      setUseManualAddress(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        // Simulate reverse geocoding (in real app, use Google Maps API)
        const mockAddress = "123 Sample Street, City, State - 123456";
        
        setLocationData({
          latitude,
          longitude,
          address: mockAddress
        });
        
        toast({
          title: "Location detected!",
          description: "Your current location has been captured.",
        });
        
        setIsGettingLocation(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        toast({
          title: "Location access denied",
          description: "Please enter your delivery address manually.",
          variant: "destructive"
        });
        setIsGettingLocation(false);
        setUseManualAddress(true);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  const handleManualSubmit = () => {
    if (!manualAddress.trim()) {
      toast({
        title: "Address required",
        description: "Please enter your delivery address.",
        variant: "destructive"
      });
      return;
    }

    setLocationData({
      address: manualAddress,
      manualAddress: manualAddress
    });
  };

  const handleContinue = () => {
    if (locationData) {
      onComplete(locationData);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-black font-medium"
        >
          ← Back
        </button>
        <h2 className="text-2xl font-bold">Delivery Location</h2>
      </div>

      {!locationData ? (
        <div className="space-y-6">
          {!useManualAddress ? (
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-gray-400" size={64} />
              <h3 className="text-xl font-semibold mb-2">Get Your Current Location</h3>
              <p className="text-gray-600 mb-6">
                We'll use your location to provide accurate delivery estimates
              </p>
              
              <Button
                onClick={getCurrentLocation}
                disabled={isGettingLocation}
                className="bg-black text-white hover:bg-gray-800 mb-4"
              >
                {isGettingLocation ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Getting Location...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Navigation size={20} />
                    Use My Current Location
                  </div>
                )}
              </Button>
              
              <div className="text-center">
                <button
                  onClick={() => setUseManualAddress(true)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Enter address manually instead
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-4">Enter Delivery Address</h3>
              <textarea
                value={manualAddress}
                onChange={(e) => setManualAddress(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                rows={4}
                placeholder="Enter your complete delivery address including landmarks..."
                required
              />
              
              <div className="flex gap-3 mt-4">
                <Button
                  onClick={handleManualSubmit}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Confirm Address
                </Button>
                <Button
                  onClick={() => setUseManualAddress(false)}
                  variant="outline"
                >
                  Use GPS Instead
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-green-600 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-green-800 mb-1">Delivery Address Confirmed</h4>
                <p className="text-green-700">{locationData.address}</p>
                {locationData.latitude && locationData.longitude && (
                  <p className="text-sm text-green-600 mt-1">
                    GPS Coordinates: {locationData.latitude.toFixed(4)}, {locationData.longitude.toFixed(4)}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-800 mb-2">Estimated Delivery</h4>
            <p className="text-blue-700">3-5 business days</p>
            <p className="text-sm text-blue-600 mt-1">Free shipping on all orders</p>
          </div>
          
          <div className="flex gap-3">
            <Button
              onClick={handleContinue}
              className="flex-1 bg-black text-white hover:bg-gray-800 h-12 text-lg font-semibold"
            >
              Continue to Payment
            </Button>
            <Button
              onClick={() => setLocationData(null)}
              variant="outline"
              className="px-6"
            >
              Change
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationStep;
