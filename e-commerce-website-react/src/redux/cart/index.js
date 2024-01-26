import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const _cart = [...state];
      const found = _cart.findIndex((item) => item.id === action.payload.id);
      if (found === -1) {
        _cart.push(action.payload);
        toast.success("Item added to cart!");
      } else {
        toast.warning("Item is already in cart!");
      }
      return _cart;
    },
    removeFromCart: (state, action) => {
      const _cart = [...current(state)];
      const filter = _cart.filter((item) => item.id !== action.payload);
      toast.warning("Item removed from cart!");
      return filter;
    },
    emptyCart: (state, action) => {
      return [];
    },
  },
});
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
