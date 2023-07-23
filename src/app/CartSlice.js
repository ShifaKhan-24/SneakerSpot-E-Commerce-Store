import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmt: 0,
  cartTotalQTY: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item QUANT increased `);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} added to cart`);
      }

      //local storage
      localStorage.setItem("cart", JSON.stringify(state.cartItems)); //converting items data in json format
    },

    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = removeItem;

      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      toast.success(`${action.payload.title} removed from cart`);
    },

    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item QUANT increased `);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success(`Item QUANT decreased `);
      }
    },
    setClearCartItems: (state, action) => {
      state.cartItems = [];
      toast.success(`Cart Cleared `);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setGetTotals: (state, action) => {
      let { totalAmt, totalQty } = state.cartItems.reduce(
        (cartTotal, cartItems) => {
          const { price, cartQuantity } = cartItems;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmt += totalPrice;
          cartTotal.totalQty += cartQuantity;

          return cartTotal;
        },
        {
          totalAmt: 0,
          totalQty: 0,
        }
      );
      state.cartTotalAmt = totalAmt;
      state.cartTotalQTY = totalQty;
    },
  },
});

export const selectCartItems = (state) => state.cart.cartItems; // selector for selecting cart items

export const selectCartState = (state) => state.cart.cartState; // for selecting cart state

export const selectCartTotalAmt = (state) => state.cart.cartTotalAmt;
export const selectCartTotalQTY = (state) => state.cart.cartTotalQTY;
export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setClearCartItems,
  setDecreaseItemQTY,
  setGetTotals,
} = CartSlice.actions;

export default CartSlice.reducer;
