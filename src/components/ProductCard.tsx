import { Badge, Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  colors: string[];
  inStock: boolean;
  featured: boolean;
  tags: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishListed] = useState(false);
  const discount = 1;
  return (
    <div className="group cursor-pointer">
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-blue-100/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2">
        <div className="relative">
          <NavLink to={"product"}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img alt={product.name} className="h-full w-full object-cover" />
            </div>
          </NavLink>

          {/* badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.featured && (
              <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-medium">
                Featured
              </div>
            )}
            {discount > 0 && (
              <div className="bg-red-500 text-white rounded-full px-3 py-1 text-xs font-medium">
                {discount}% OFF
              </div>
            )}
            {!product.inStock && (
              <div className="bg-gray-500 text-white rounded-full px-3 py-1 text-xs font-medium">
                Out of Stock
              </div>
            )}
          </div>

          {/* wishlist button */}
          <button
            onClick={() => setIsWishListed(!isWishlisted)}
            className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-white text-gray-600 hover:text-red-500 backdrop-blur-sm"
            }`}
          >
            <Heart
              className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`}
            />
          </button>

          {/* quick add to cart */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button
              disabled={!product.inStock}
              className="w-full h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add To Cart
            </Button>
          </div>
        </div>

        <div className="p-6">
          <NavLink to={"/product"}>
            <div className="space-y-3">
              {/* category & brand  */}
              <div className="flex items-center justify-between">
                <div className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">{product.category}</div>
                <span className="text-sm text-gray-500">{product.brand}</span>
              </div>

              {/* product name  */}
              <h3 className="text-lg font-bold group-hover:text-blue-600">{product.name}</h3>

              {/* rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}/>
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews})
                </span>
              </div>

              {/* colors  */}
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm font-medium">Colors:</span>
                <div className="flex gap-1">
                  <button>blue</button>
                </div>
              </div>

              {/* price */}
              <div className="">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
