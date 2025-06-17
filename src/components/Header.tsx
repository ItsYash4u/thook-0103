
import React from "react";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleWishlistClick = () => {
    toast({
      title: "Wishlist Coming Soon!",
      description: "Wishlist feature will be available soon.",
    });
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center" style={{ minWidth: 120 }}>
          <span className="font-hero text-3xl sm:text-4xl font-black tracking-[0.1em] text-black select-none">
            <Link to="/" className="hover:text-yellow-700 transition">THOOK</Link>
          </span>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 flex justify-center space-x-8 ml-3">
          <Link to="/men" className="text-black font-semibold text-base hover:text-yellow-600 transition">MEN</Link>
        </nav>
        
        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <SearchBar />
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-black text-base font-bold px-2" onClick={handleLoginClick}>
            LOGIN
          </Button>
          <Button variant="ghost" className="p-2" aria-label="Wishlist" onClick={handleWishlistClick}>
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21C12 21 5 13.61 5 9.5C5 6.42 7.42 4 10.5 4C12.04 4 13.54 4.81 14.44 6.09C15.34 4.81 16.84 4 18.38 4C21.46 4 23.88 6.42 23.88 9.5C23.88 13.61 17 21 17 21H12Z"/>
            </svg>
          </Button>
          <Button variant="ghost" className="p-2" aria-label="Cart" onClick={handleCartClick}>
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l.89 4.44a2 2 0 0 0 2 1.56h9.72a2 2 0 0 0 2-1.56l1.38-6.44H5"/>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
