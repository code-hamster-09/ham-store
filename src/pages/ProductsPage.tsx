import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import ProductSort from "@/components/ProductSort";
import { Input } from "@/components/ui/input";
import { setSearchQuery } from "@/store/slices/productsSlice";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

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

const ProductsPage = () => {
  const { searchQuery, selectedFilters, sortBy } = useSelector(
    (state) => state.productsSlice
  );
  const dispatch = useDispatch();
  const filteredProducts = () => {
    return products
      .filter((product) => {
        // searchQuery filter
        if (
          searchQuery.length > 0 &&
          !product.name
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
        ) {
          return false;
        }
        // categories filter
        if (
          selectedFilters.categories.length > 0 &&
          !selectedFilters.categories.includes(product.category)
        ) {
          return false;
        }

        // brands filter
        if (
          selectedFilters.brands.length > 0 &&
          !selectedFilters.brands.includes(product.brand)
        ) {
          return false;
        }

        // price range filter
        if (
          selectedFilters.priceRange[0] > product.price ||
          selectedFilters.priceRange[1] < product.price
        ) {
          return false;
        }

        // instock filter .
        if (selectedFilters.inStock && !product.inStock) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "newest":
            return b.id - a.id;
          case "price-low":
            return a.price - b.price;
          case "price-high":
            return b.price - a.price;
          case "rating":
            return b.rating - a.rating;
          case "featured":
          default:
            return b.featured - a.featured;
        }
      });
  };
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 py-8 ">
        <div className="mb-8">
          <div className="space-y-4 mb-6">
            <h2 className="text-4xl font-bold">Our Products</h2>
            <p className="text-lg text-gray-600">
              Discover amazing products crafted with care
            </p>
          </div>

          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              className="pl-12 h-14 !text-lg rounded-2xl border-0 bg-white/80 backdrop-blur-sm shadow-lg shadow-blue-100/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-[280px_1fr] gap-8">
          <div className="">
            <ProductFilters />
          </div>

          <div className="">
            <div className="flex items-center justify-between mb-6">
              <span>Showing {filteredProducts().length} of {products.length} products</span>
              <ProductSort />
            </div>
            <div className="grid grid-cols-3 gap-6">
              {filteredProducts().map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
