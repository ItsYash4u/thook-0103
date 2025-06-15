
import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import { useToast } from '@/hooks/use-toast';

// Dummy product data
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Anime Naruto T-Shirt",
    price: 999,
    images: [
      "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg",
      "https://i.pinimg.com/736x/db/ff/7b/dbff7b7fce0abf787fc72667c4ce7502.jpg",
      "https://i.pinimg.com/736x/06/35/b2/0635b212f849e46d4b191cf5833d69c7.jpg",
      "https://i.pinimg.com/736x/95/45/4a/95454a0bfb23e0ef73a1533f13c4c980.jpg"
    ],
    isNew: true
  },
  {
    id: 2,
    name: "Marvel Avengers Hoodie",
    price: 1499,
    images: [
      "https://i.pinimg.com/736x/06/35/b2/0635b212f849e46d4b191cf5833d69c7.jpg",
      "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg",
      "https://i.pinimg.com/736x/db/ff/7b/dbff7b7fce0abf787fc72667c4ce7502.jpg",
      "https://i.pinimg.com/736x/95/45/4a/95454a0bfb23e0ef73a1533f13c4c980.jpg"
    ],
    isNew: false
  },
  {
    id: 3,
    name: "Spartan Warriors Tee",
    price: 799,
    images: [
      "https://i.pinimg.com/736x/db/ff/7b/dbff7b7fce0abf787fc72667c4ce7502.jpg",
      "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg",
      "https://i.pinimg.com/736x/06/35/b2/0635b212f849e46d4b191cf5833d69c7.jpg",
      "https://i.pinimg.com/736x/95/45/4a/95454a0bfb23e0ef73a1533f13c4c980.jpg"
    ],
    isNew: true
  },
  {
    id: 4,
    name: "Dragon Ball Z Tank Top",
    price: 899,
    images: [
      "https://i.pinimg.com/736x/95/45/4a/95454a0bfb23e0ef73a1533f13c4c980.jpg",
      "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg",
      "https://i.pinimg.com/736x/db/ff/7b/dbff7b7fce0abf787fc72667c4ce7502.jpg",
      "https://i.pinimg.com/736x/06/35/b2/0635b212f849e46d4b191cf5833d69c7.jpg"
    ],
    isNew: false
  },
  {
    id: 5,
    name: "One Piece Crew Sweatshirt",
    price: 1299,
    images: [
      "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg",
      "https://i.pinimg.com/736x/06/35/b2/0635b212f849e46d4b191cf5833d69c7.jpg",
      "https://i.pinimg.com/736x/db/ff/7b/dbff7b7fce0abf787fc72667c4ce7502.jpg",
      "https://i.pinimg.com/736x/95/45/4a/95454a0bfb23e0ef73a1533f13c4c980.jpg"
    ],
    isNew: true
  },
  {
    id: 6,
    name: "Thor Hammer Graphic Tee",
    price: 949,
    images: [
      "https://i.pinimg.com/736x/06/35/b2/0635b212f849e46d4b191cf5833d69c7.jpg",
      "https://i.pinimg.com/736x/db/ff/7b/dbff7b7fce0abf787fc72667c4ce7502.jpg",
      "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg",
      "https://i.pinimg.com/736x/95/45/4a/95454a0bfb23e0ef73a1533f13c4c980.jpg"
    ],
    isNew: false
  },
  {
    id: 7,
    name: "Attack on Titan Scout Jacket",
    price: 1799,
    images: [
      "https://i.pinimg.com/736x/db/ff/7b/dbff7b7fce0abf787fc72667c4ce7502.jpg",
      "https://i.pinimg.com/736x/95/45/4a/95454a0bfb23e0ef73a1533f13c4c980.jpg",
      "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg",
      "https://i.pinimg.com/736x/06/35/b2/0635b212f849e46d4b191cf5833d69c7.jpg"
    ],
    isNew: true
  },
  {
    id: 8,
    name: "Iron Man Arc Reactor Hoodie",
    price: 1399,
    images: [
      "https://i.pinimg.com/736x/95/45/4a/95454a0bfb23e0ef73a1533f13c4c980.jpg",
      "https://i.pinimg.com/736x/06/35/b2/0635b212f849e46d4b191cf5833d69c7.jpg",
      "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg",
      "https://i.pinimg.com/736x/db/ff/7b/dbff7b7fce0abf787fc72667c4ce7502.jpg"
    ],
    isNew: false
  },
  {
    id: 9,
    name: "Batman Dark Knight Tee",
    price: 849,
    images: [
      "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg",
      "https://i.pinimg.com/736x/db/ff/7b/dbff7b7fce0abf787fc72667c4ce7502.jpg",
      "https://i.pinimg.com/736x/06/35/b2/0635b212f849e46d4b191cf5833d69c7.jpg",
      "https://i.pinimg.com/736x/95/45/4a/95454a0bfb23e0ef73a1533f13c4c980.jpg"
    ],
    isNew: true
  },
  {
    id: 10,
    name: "Goku Ultra Instinct Sweatshirt",
    price: 1199,
    images: [
      "https://i.pinimg.com/736x/06/35/b2/0635b212f849e46d4b191cf5833d69c7.jpg",
      "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg",
      "https://i.pinimg.com/736x/95/45/4a/95454a0bfb23e0ef73a1533f13c4c980.jpg",
      "https://i.pinimg.com/736x/db/ff/7b/dbff7b7fce0abf787fc72667c4ce7502.jpg"
    ],
    isNew: false
  }
];

const Products = () => {
  const [products, setProducts] = useState(DUMMY_PRODUCTS.slice(0, 10));
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const { toast } = useToast();

  const handleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (productId: number, productName: string) => {
    setCartItems(prev => [...prev, productId]);
    toast({
      title: "Added to Cart!",
      description: `${productName} has been added to your cart.`,
    });
  };

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
    let sortedProducts = [...products];
    
    switch (newSortBy) {
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'newest':
        sortedProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'oldest':
        sortedProducts.sort((a, b) => (a.isNew ? 1 : 0) - (b.isNew ? 1 : 0));
        break;
    }
    
    setProducts(sortedProducts);
  };

  const loadMoreProducts = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setProducts(prev => [...prev, ...DUMMY_PRODUCTS.slice(0, 5)]);
      setIsLoading(false);
      setHasMore(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <span className="font-hero text-2xl font-black tracking-[0.1em] text-black">
              THOOK
            </span>
          </div>
          
          {/* Cart Icon */}
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-black" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Filter Section */}
          <ProductFilter sortBy={sortBy} onSortChange={handleSortChange} />
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isLiked={likedProducts.includes(product.id)}
                onLike={() => handleLike(product.id)}
                onAddToCart={() => handleAddToCart(product.id, product.name)}
              />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center mt-12">
              <button
                onClick={loadMoreProducts}
                disabled={isLoading}
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;
