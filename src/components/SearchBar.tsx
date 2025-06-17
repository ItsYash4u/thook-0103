
import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const SEARCH_DATA: SearchResult[] = [
  { id: 1, name: "Anime Naruto T-Shirt", category: "anime", price: 999, image: "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg" },
  { id: 2, name: "Marvel Avengers Hoodie", category: "marvel", price: 1499, image: "https://i.pinimg.com/736x/06/35/b2/0635b212f849e46d4b191cf5833d69c7.jpg" },
  { id: 3, name: "Spartan Warriors Tee", category: "spartans", price: 799, image: "https://i.pinimg.com/736x/db/ff/7b/dbff7b7fce0abf787fc72667c4ce7502.jpg" },
  { id: 4, name: "Dragon Ball Z Tank Top", category: "anime", price: 899, image: "https://i.pinimg.com/736x/95/45/4a/95454a0bfb23e0ef73a1533f13c4c980.jpg" },
  { id: 5, name: "One Piece Crew Sweatshirt", category: "anime", price: 1299, image: "https://i.pinimg.com/736x/2c/cb/f6/2ccbf6d629250ab2f096d84558b6be12.jpg" },
];

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = "" }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 0) {
      const filteredResults = SEARCH_DATA.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (result: SearchResult) => {
    navigate(`/products?category=${result.category}`);
    setQuery('');
    setIsOpen(false);
  };

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, categories..."
          className="w-full h-10 pl-10 pr-10 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-80 overflow-y-auto">
          {results.map((result) => (
            <div
              key={result.id}
              onClick={() => handleResultClick(result)}
              className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
            >
              <img
                src={result.image}
                alt={result.name}
                className="w-10 h-10 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm">{result.name}</p>
                <p className="text-xs text-gray-500 capitalize">{result.category}</p>
              </div>
              <span className="font-bold text-black">₹{result.price}</span>
            </div>
          ))}
        </div>
      )}

      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4 text-center text-gray-500">
          No products found for "{query}"
        </div>
      )}
    </div>
  );
};

export default SearchBar;
