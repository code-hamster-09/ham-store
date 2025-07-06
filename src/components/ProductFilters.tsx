import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "./ui/separator";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { X } from "lucide-react";

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
    <div className="bg-white rounded-3xl p-6 shadow-2xl shadow-blue-100 space-y-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        <div className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">3</div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-bold">Active Filters</h3>
          <Button className="bg-transparent text-red-500 shadow-none rounded-xl px-3 hover:bg-red-50">Clear All</Button>
        </div>
        <div className="flex gap-3 flex-wrap">
          <div className="flex items-center text-xs gap-2 font-medium bg-gray-200/60 px-3 py-1 rounded-full ">
            Electronics <X className="w-3 h-3 hover:text-red-500 cursor-pointer"/>
          </div>
          <div className="flex items-center text-xs gap-2 font-medium bg-gray-200/60 px-3 py-1 rounded-full ">
            Accessories <X className="w-3 h-3"/>
          </div>
          <div className="flex items-center text-xs gap-2 font-medium bg-gray-200/60 px-3 py-1 rounded-full ">
            Electronics <X className="w-3 h-3"/>
          </div>
        </div>
      </div>

      <div className="">
        <h3 className="font-bold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex gap-3 items-center">
              <Checkbox className="border-blue-600 rounded-full w-4 h-4" />
              <Label className="text-gray-600">{category}</Label>
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
              <Checkbox className="border-blue-600 rounded-full w-4 h-4" />
              <Label className="text-gray-600">{brand}</Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-bold mb-4">Price Range</h3>
        <div className="">
          <Slider className="text-blue-600" />
        </div>
        <div className="flex justify-between text-gray-500 text-sm font-medium">
          <span>0$</span>
          <span>500$</span>
        </div>
      </div>

      <Separator />

      <div className="">
        <h3 className="font-bold mb-4">Colors</h3>
        <div className="grid grid-cols-4 gap-3">
          {colors.map((color) => (
            <div key={color} className="flex flex-col items-center">
              <button
                className="w-8 h-8 rounded-full border-2 border-gray-200"
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
        <Checkbox className="border-blue-600 rounded-full w-4 h-4" />
        <Label className="text-gray-600">In Stock Only</Label>
      </div>
    </div>
  );
};

export default ProductFilters;
