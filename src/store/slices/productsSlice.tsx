import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFilters: {
    categories: [],
    brands: [],
    priceRange: [0, 500],
    colors: [],
    inStock: false,
  },
  searchQuery: "",
  sortBy: "featured"
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      const categories = state.selectedFilters.categories;
      state.selectedFilters.categories = categories.includes(action.payload)
        ? categories.filter((category) => category !== action.payload)
        : [...categories, action.payload];
    },
    setBrands: (state, action) => {
      const brands = state.selectedFilters.brands;
      state.selectedFilters.brands = brands.includes(action.payload)
        ? brands.filter((brand) => brand !== action.payload)
        : [...brands, action.payload];
    },
    setPriceRange: (state, action) => {
      state.selectedFilters.priceRange = action.payload
    },
    setColors: (state, action) => {
      const colors = state.selectedFilters.colors;
      state.selectedFilters.colors = colors.includes(action.payload)
        ? colors.filter((color) => color !== action.payload)
        : [...colors, action.payload];
    },
    setInStock: (state) => {
      state.selectedFilters.inStock = !state.selectedFilters.inStock;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSort: (state, action) => {
      state.sortBy = action.payload
    },
    clearFilters: (state) => {
      state.selectedFilters = {
        categories: [],
        brands: [],
        priceRange: [0, 500],
        colors: [],
        inStock: false,
      };
    },
  },
});

export const {
  setCategories,
  setBrands,
  setPriceRange,
  setColors,
  setInStock,
  setSearchQuery,
  setSort,
  clearFilters,
} = productsSlice.actions;
export default productsSlice.reducer;
