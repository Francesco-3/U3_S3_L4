import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    companies: []
  },
  reducers: {
    addFavourite(state, action) {
      const name = action.payload;
      if (!state.companies.includes(name)) {
        state.companies.push(name);
      }
    },
    removeFavourite(state, action) {
      const name = action.payload;
      state.companies = state.companies.filter(c => c !== name);
    },
    clearFavourites(state) {
      state.companies = [];
    }
  }
});

export const { addFavourite, removeFavourite, clearFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;