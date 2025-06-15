
import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Zap } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  isNew: boolean;
}

interface ProductCardProps {
  product: Product;
  isLiked: boolean;
  onLike: () => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isLiked,
  onLike,
  onAddToCart,
  onBuyNow
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [product.images.length]);

  const handleLikeClick = () => {
    setIsAnimating(true);
    onLike();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
      {/* Image Carousel */}
      <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-100">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* New Badge */}
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            NEW
          </div>
        )}

        {/* Like Button */}
        <button
          onClick={handleLikeClick}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isAnimating ? 'animate-pulse scale-125' : ''
          } ${
            isLiked 
              ? 'bg-red-500 text-white shadow-lg' 
              : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white'
          }`}
        >
          <Heart 
            className={`w-4 h-4 transition-all duration-200 ${
              isLiked ? 'fill-current' : ''
            }`}
          />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {product.images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-black">
            ₹{product.price}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={onAddToCart}
            className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          
          <button
            onClick={onBuyNow}
            className="flex-1 bg-black text-white px-3 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <Zap className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
