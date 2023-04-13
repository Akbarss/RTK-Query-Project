import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../../../types/product";

const initialState: IProducts[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProducts>) => {
      state.push(action.payload);
    },

    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((p) => p.id === action.payload.id);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartAction = cartSlice.actions;
