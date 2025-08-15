import {
  Backpack,
  Camera,
  Headphones,
  Shirt,
  Smartphone,
  Watch,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      icon: Headphones,
      count: "120+ items",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Accessories",
      icon: Watch,
      count: "80+ items",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Clothing",
      icon: Shirt,
      count: "200+ items",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Gadgets",
      icon: Smartphone,
      count: "90+ items",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Bags",
      icon: Backpack,
      count: "60+ items",
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "Tech",
      icon: Camera,
      count: "40+ items",
      color: "from-teal-500 to-cyan-500",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of carefully curated categories
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <NavLink to={"/"} key={category.name}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg shadow-blue-200/50 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="text-white w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{category.count}</p>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <NavLink to={"/products"}>
            <Button variant="outline" className="h-12 px-8 rounded-2xl border-2 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50">View All Categories</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Categories;
