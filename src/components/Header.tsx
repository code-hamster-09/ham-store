import {
  Badge,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  Store,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* logo */}
          <NavLink to={"/"} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Store className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HamStore
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="search"
                placeholder="Search products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-2xl border-0 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">

            {/* Wishlist */}
            <NavLink to={"/wishlist"}>
              <Button variant="ghost" size="icon" className="rounded-2xl relative">
                <Heart className="w-5 h-5"/>
              </Button>
            </NavLink>

            {/* Cart */}
            <NavLink to={"/cart"}>
              <Button variant="ghost" size="icon" className="rounded-2xl relative">
                <ShoppingCart className="w-5 h-5"/>
                <div className="absolute -top-3 -right-2 w-6 h-6 rounded-full bg-red-500 border-red-500 text-white text-xs flex items-center justify-center font-bold">1</div>
              </Button>
            </NavLink>

            {/* Profile  */}
            <NavLink to={"/profile"}>
              <Button variant="ghost" size="icon" className="rounded-2xl">
                <User className="w-5 h-5"/>
              </Button>
            </NavLink>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
            </Button>
          </div>
        </div>

        {/* mobile search bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
            <Input
              type="search"
              placeholder="Search products"
              value={searchQuery}
              className="pl-12 h-12 rounded-2xl border-0 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu  */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  key={item.name}
                  to={item.href}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
