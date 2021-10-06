import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [
      {
        normalizedName: "electronics",
        displayName: "ELECTRONICS",
        description: "Electronics description goes here",
      },
      {
        normalizedName: "food",
        displayName: "FOOD",
        description: "Food description goes here",
      },
    ],
    activeCategory: "electronics",
  },
  reducers: {
    changeActiveCat(state, action) {
      state.activeCategory = action.payload;
    },
  },
});

export const { changeActiveCat } = categorySlice.actions;

export default categorySlice.reducer;
