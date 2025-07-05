import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones Pro",
      price: 299.99,
      originalPrice: 399.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Electronics",
      brand: "TechSound",
      rating: 4.8,
      reviews: 124,
      colors: ["black", "white", "blue"],
      inStock: true,
      featured: true,
      tags: ["wireless", "premium", "noise-canceling"],
    },
    {
      id: 2,
      name: "Minimalist Watch",
      price: 189.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Accessories",
      brand: "TimeStyle",
      rating: 4.6,
      reviews: 89,
      colors: ["silver", "gold", "black"],
      inStock: true,
      featured: true,
      tags: ["minimalist", "elegant", "waterproof"],
    },
    {
      id: 4,
      name: "Smart Fitness Tracker",
      price: 129.99,
      originalPrice: 179.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Electronics",
      brand: "FitTech",
      rating: 4.5,
      reviews: 203,
      colors: ["black", "pink", "blue"],
      inStock: true,
      featured: true,
      tags: ["fitness", "smart", "waterproof"],
    },
    {
      id: 5,
      name: "Leather Backpack",
      price: 159.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Accessories",
      brand: "UrbanStyle",
      rating: 4.9,
      reviews: 78,
      colors: ["brown", "black", "tan"],
      inStock: true,
      featured: false,
      tags: ["leather", "durable", "stylish"],
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">Discover our handpicked selection of premium products</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>

        <div className="text-center">
          <NavLink to={"/products"}>
            <Button className="h-14 px-8 rounded-2xl text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-200">View All Products</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
