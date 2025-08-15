import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Star, TrendingUp } from "lucide-react";
import { NavLink } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Latest gadgets and tech accessories",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 120,
    trending: true,
    subcategories: [
      "Headphones",
      "Smartphones",
      "Laptops",
      "Cameras",
      "Smart Watches",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Clothing",
    description: "Fashion for every style and occasion",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 200,
    trending: true,
    subcategories: ["T-Shirts", "Jeans", "Dresses", "Jackets", "Shoes"],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 3,
    name: "Accessories",
    description: "Complete your look with premium accessories",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 80,
    trending: false,
    subcategories: ["Watches", "Bags", "Jewelry", "Sunglasses", "Belts"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 4,
    name: "Home & Living",
    description: "Transform your space with style",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 150,
    trending: true,
    subcategories: ["Furniture", "Decor", "Kitchen", "Bedding", "Lighting"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    name: "Sports & Fitness",
    description: "Gear up for an active lifestyle",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 90,
    trending: false,
    subcategories: [
      "Gym Equipment",
      "Sportswear",
      "Outdoor Gear",
      "Supplements",
      "Accessories",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    name: "Beauty & Health",
    description: "Look and feel your best every day",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 110,
    trending: true,
    subcategories: [
      "Skincare",
      "Makeup",
      "Hair Care",
      "Wellness",
      "Fragrances",
    ],
    color: "from-teal-500 to-cyan-500",
  },
];

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our carefully curated categories and find exactly what
            you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={`/products?category=${category.name.toLowerCase()}`}
            >
              <div className="group cursor-pointer">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-blue-100/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2">
                  {/* Category Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {category.trending && (
                        <Badge className="bg-red-500 text-white rounded-full px-3 py-1">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      <Badge className="bg-white/90 text-gray-700 rounded-full px-3 py-1">
                        <Package className="w-3 h-3 mr-1" />
                        {category.productCount} items
                      </Badge>
                    </div>

                    {/* Category Icon */}
                    <div className="absolute bottom-4 right-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                      >
                        <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>

                    {/* Subcategories */}
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <Badge
                          key={sub}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 rounded-full"
                        >
                          {sub}
                        </Badge>
                      ))}
                      {category.subcategories.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 rounded-full"
                        >
                          +{category.subcategories.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg shadow-blue-100/50 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">750+</div>
              <div className="text-gray-600">Total Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9</div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                Average Rating
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-600 mb-8">
            Browse all our products or contact our support team for help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/products">
              <Button className="h-12 px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Browse All Products
              </Button>
            </NavLink>
            <NavLink to="/contact">
              <Button
                variant="outline"
                className="h-12 px-8 rounded-2xl border-2 border-gray-300 hover:border-gray-400 bg-transparent"
              >
                Contact Support
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
