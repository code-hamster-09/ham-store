import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  clearFilters,
  setBrands,
  setCategories,
  setColors,
  setInStock,
  setPriceRange,
} from "@/store/slices/productsSlice";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Slider } from "./ui/slider";

const ProductFilters = () => {
  const { selectedFilters } = useSelector((state) => state.productsSlice);
  const dispatch = useDispatch();
  const categories = ["Electronics", "Accessories", "Clothing"];
  const brands = [
    "TechSound",
    "TimeStyle",
    "EcoWear",
    "FitTech",
    "UrbanStyle",
    "ChargeTech",
  ];
  const colors = [
    "black",
    "white",
    "blue",
    "silver",
    "gold",
    "gray",
    "navy",
    "pink",
    "brown",
    "tan",
  ];
  const selectedFiltersQuantity =
    selectedFilters.categories.length +
    selectedFilters.brands.length +
    selectedFilters.colors.length +
    (selectedFilters.inStock ? 1 : 0) +
    (selectedFilters.priceRange[0] > 0 || selectedFilters.priceRange[1] < 500
      ? 1
      : 0);
  return (
    <div className="bg-white rounded-3xl p-6 shadow-2xl shadow-blue-100 space-y-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        {selectedFiltersQuantity > 0 && (
          <div className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            {selectedFiltersQuantity}
          </div>
        )}
      </div>
      {selectedFiltersQuantity > 0 && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Active Filters</h3>
            <Button
              onClick={() => dispatch(clearFilters())}
              className="bg-transparent text-red-500 shadow-none rounded-xl px-3 hover:bg-red-50"
            >
              Clear All
            </Button>
          </div>

          <div className="flex gap-3 flex-wrap">
            {selectedFilters.categories.map((category) => (
              <div className="flex items-center text-xs gap-2 font-medium bg-gray-200/60 px-3 py-1 rounded-full ">
                {category}
                <X
                  onClick={() => dispatch(setCategories(category))}
                  className="w-3 h-3 hover:text-red-500 cursor-pointer"
                />
              </div>
            ))}

            {selectedFilters.brands.map((brand) => (
              <div className="flex items-center text-xs gap-2 font-medium bg-gray-200/60 px-3 py-1 rounded-full ">
                {brand}
                <X
                  onClick={() => dispatch(setBrands(brand))}
                  className="w-3 h-3 hover:text-red-500 cursor-pointer"
                />
              </div>
            ))}

            {selectedFilters.colors.map((color) => (
              <div className="flex items-center text-xs gap-2 font-medium bg-gray-200/60 px-3 py-1 rounded-full ">
                {color}
                <X
                  onClick={() => dispatch(setColors(color))}
                  className="w-3 h-3 hover:text-red-500 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="">
        <h3 className="font-bold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex gap-3 items-center">
              <Checkbox
                checked={selectedFilters.categories.includes(category)}
                id={category}
                onClick={() => dispatch(setCategories(category))}
                className="border-blue-600 rounded-full w-4 h-4 transition-all duration-100"
              />
              <Label
                htmlFor={category}
                className="text-gray-600 cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="">
        <h3 className="font-bold mb-4">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex gap-3 items-center">
              <Checkbox
                onClick={() => dispatch(setBrands(brand))}
                checked={selectedFilters.brands.includes(brand)}
                id={brand}
                className="border-blue-600 rounded-full w-4 h-4 transition-all duration-100"
              />
              <Label htmlFor={brand} className="text-gray-600 cursor-pointer">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-bold mb-4">Price Range</h3>
        <div className="">
          <Slider
            value={selectedFilters.priceRange}
            onValueChange={(value) => dispatch(setPriceRange(value))}
            min={0}
            max={500}
            step={10}
            className="text-blue-600"
          />
        </div>
        <div className="flex justify-between text-gray-500 text-sm font-medium">
          <span>{selectedFilters.priceRange[0]}$</span>
          <span>{selectedFilters.priceRange[1]}$</span>
        </div>
      </div>

      <Separator />

      <div className="">
        <h3 className="font-bold mb-4">Colors</h3>
        <div className="grid grid-cols-4 gap-3">
          {colors.map((color) => (
            <div key={color} className="flex flex-col items-center">
              <button
                onClick={() => dispatch(setColors(color))}
                className={`w-8 h-8 rounded-full border-2 mb-2 text-transparent transition-all ${
                  selectedFilters.colors.includes(color)
                    ? "border-blue-500 scale-110 shadow-lg shadow-blue-200"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                style={{ backgroundColor: color }}
              ></button>
              <Label className="text-gray-600 text-xs font-medium capitalize">
                {color}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="flex gap-3 items-center">
        <Checkbox
          checked={selectedFilters.inStock}
          id="inStock"
          onClick={() => dispatch(setInStock())}
          className="border-blue-600 rounded-full w-4 h-4 transition-all duration-100"
        />
        <Label htmlFor="inStock" className="text-gray-600 cursor-pointer">
          In Stock Only
        </Label>
      </div>
    </div>
  );
};

export default ProductFilters;
