
import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "OVERSIZED T-SHIRTS",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
    link: "#"
  },
  {
    title: "GRAPHIC TEES",
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f9476?w=300&h=400&fit=crop",
    link: "#"
  },
  {
    title: "HOODIES",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop",
    link: "#"
  },
  {
    title: "JOGGERS",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    link: "#"
  }
];

const Categories = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-wide">
          TRENDING CATEGORIES
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[3/4] mb-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
              <h3 className="text-center font-bold text-lg uppercase tracking-wide">
                {category.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
