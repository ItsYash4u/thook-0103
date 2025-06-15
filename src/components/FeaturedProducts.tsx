
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Superhero Graphic Tee",
    price: "₹699",
    originalPrice: "₹999",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
    discount: "30% OFF"
  },
  {
    id: 2,
    name: "Anime Print Hoodie",
    price: "₹1299",
    originalPrice: "₹1799",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop",
    discount: "28% OFF"
  },
  {
    id: 3,
    name: "Pop Culture Oversized Tee",
    price: "₹899",
    originalPrice: "₹1299",
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f9476?w=300&h=400&fit=crop",
    discount: "31% OFF"
  },
  {
    id: 4,
    name: "Comic Strip T-Shirt",
    price: "₹649",
    originalPrice: "₹899",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    discount: "28% OFF"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-wide">
          BESTSELLERS
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                  {product.discount}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-sm mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-lg">{product.price}</span>
                  <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-[#ffd600] hover:bg-[#ffec80] text-black font-bold px-8 py-3 rounded-full uppercase tracking-wide">
            VIEW ALL PRODUCTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
