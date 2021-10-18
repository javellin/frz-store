import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartQuantity: 0,
  cartItems: [],
  items: [],
  isSearching: false,
  filteredItems: [],
  selectedCategory: {
    id: "all",
    label: "All items",
  },
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    updateShopItems: (state, action) => {
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    },
    filterByCategory: (state, action) => {
      return {
        ...state,
        selectedCategory: action.payload,
        filteredItems:
          action.payload.id === "all"
            ? state.items
            : state.items.filter(
                (item) => item.category.id === action.payload.id
              ),
      };
    },
    addToCart: (state, action) => {
      const newCartItems = [...state.cartItems];
      const item = action.payload;
      item.quantity = 1;
      newCartItems.push(item);
      return {
        ...state,
        cartItems: newCartItems,
        cartQuantity: newCartItems.length,
      };
    },
    incrementProductQuantity: (state, action) => {
      const itemMatch = state.cartItems.find(
        (product) => product._id === action.payload
      );

      itemMatch.quantity++;
    },
    decrementProductQuantity: (state, action) => {
      const itemMatch = state.cartItems.find(
        (product) => product._id === action.payload
      );

      itemMatch.quantity =
        itemMatch.quantity === 1 ? 1 : itemMatch.quantity - 1;
    },
    removeProductFromCart: (state, action) => {
      let newCartItems = [...state.cartItems];

      newCartItems = newCartItems.filter((item) => item._id !== action.payload);

      return {
        ...state,
        cartItems: newCartItems,
        cartQuantity: newCartItems.length,
      };
    },
    setIsSearching: (state, action) => {
      return {
        ...state,
        isSearching: action.payload,
      };
    },
    filterByTextSearch: (state, action) => {
      const newFilteredItems = state.items.filter((item) => {
        if (state.selectedCategory.id !== "all") {
          return (
            item.label.includes(action.payload) &&
            item.category.id === state.selectedCategory.id
          );
        }
        return item.label.toLowerCase().includes(action.payload.toLowerCase());
      });

      return {
        ...state,
        filteredItems: newFilteredItems,
      };
    },
  },
});

export const {
  updateShopItems,
  filterByCategory,
  addToCart,
  incrementProductQuantity,
  decrementProductQuantity,
  removeProductFromCart,
  setIsSearching,
  filterByTextSearch,
} = shopSlice.actions;

export default shopSlice.reducer;
