import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Slider } from "./ui/slider";

const ProductFilters = () => {
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
  return (
    <div className="bg-white rounded-3xl p-6">
      <h2 className="text-xl font-bold">Filters</h2>

      <div className="">
        <h3 className="text-lg font-bold">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex gap-3 items-center">
              <Checkbox className="w-5 h-5 border-blue-600 rounded-full w-4 h-4" />
              <Label className="text-gray-600">{category}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <h3 className="text-lg font-bold">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex gap-3 items-center">
              <Checkbox className=" border-blue-600 rounded-full w-4 h-4" />
              <Label className="text-gray-600">{brand}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <h3 className="text-lg font-bold">Price Range</h3>
        <div className="">
          <Slider
            className="text-blue-600"
          />
        </div>
        <div className="flex justify-between text-gray-600 text-sm">
          <span>0$</span>
          <span>500$</span>
        </div>
      </div>

      <div className="">
        <h3 className="text-lg font-bold">Colors</h3>
        <div className="grid grid-cols-4">
          {colors.map((color) => (
            <div key={color} className="flex flex-col items-center">
              <button className="w-8 h-8 rounded-full border-2 border-gray-200" style={{backgroundColor: color}}></button>
              <Label className="text-gray-600 text-xs font-medium capitalize">{color}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <Checkbox />
        <span>In Stock Only</span>
      </div>
    </div>
  );
};

export default ProductFilters;
