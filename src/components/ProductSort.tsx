import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setSort } from "@/store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductSort = () => {
  const { sortBy } = useSelector((state) => state.productsSlice)
  const dispatch = useDispatch()
  return (
    <Select value={sortBy} onValueChange={(value) => dispatch(setSort(value))}>
      <SelectTrigger className="w-48 h-12 rounded-2xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 font-medium">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent className="rounded-2xl ">
        <SelectItem value="featured">Featured</SelectItem>
        <SelectItem value="newest">Newest</SelectItem>
        <SelectItem value="price-low">Price: Low to High</SelectItem>
        <SelectItem value="price-high">Price: High to Low</SelectItem>
        <SelectItem value="rating">Highest rated</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ProductSort;
