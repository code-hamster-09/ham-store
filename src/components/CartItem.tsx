import { Minus, Plus, Trash2 } from "lucide-react";

const CartItem = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg shadow-blue-100/50">
      <div className="flex gap-6">
        <div className="w-24 h-24 rounded-2xl bg-gray-200 overflow-hidden">
          <img src="" alt="" className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-lg mb-1">
            Wireless Headphones Pro
          </h4>
          <span className="text-gray-600 mb-2">Color: black</span>
          <p className="text-2xl font-bold text-gray-900">$299.99</p>
        </div>
        <div className="items-end flex flex-col gap-4">
          <Trash2 className="text-gray-400 w-5 h-5 hover:text-red-500 cursor-pointer transition-colors" />
          <div className="border border-gray-300 rounded-2xl flex items-center overflow-hidden">
            <button className="p-2 hover:bg-gray-100 cursor-pointer transition-colors">
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
              2
            </span>
            <button className="p-2 hover:bg-gray-100 cursor-pointer transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
