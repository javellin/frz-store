import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartQuantity: 0,
  cartItems: [],
  items: [],
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
      newCartItems.push(action.payload);
      return {
        ...state,
        cartItems: newCartItems,
        cartQuantity: newCartItems.length,
      };
    },
  },
});

export const { updateShopItems, filterByCategory, addToCart } =
  shopSlice.actions;

export default shopSlice.reducer;
