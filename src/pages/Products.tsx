import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const products = [
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
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    brand: "EcoWear",
    rating: 4.7,
    reviews: 156,
    colors: ["white", "black", "gray", "navy"],
    inStock: true,
    featured: false,
    tags: ["organic", "comfortable", "sustainable"],
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
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    brand: "ChargeTech",
    rating: 4.4,
    reviews: 92,
    colors: ["white", "black"],
    inStock: false,
    featured: false,
    tags: ["wireless", "fast-charging", "compact"],
  },
];

const Products = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 py-8 ">
        <div className="mb-8">
          <div className="">
            <h2>Our Products</h2>
            <p>Discover amazing products crafted with care</p>
          </div>

          <div className="">
            <Search />
            <Input placeholder="Search products" />
          </div>
        </div>

        <div className="grid grid-cols-[280px_1fr] gap-8">
          <div className="">
            <ProductFilters />
          </div>

          <div className="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
