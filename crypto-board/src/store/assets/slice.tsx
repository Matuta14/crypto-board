import { createSlice } from '@reduxjs/toolkit';

const assetsSlice = createSlice({
  name: 'assets',
  initialState: {
    assets: null,
    prices: null,
  },
  reducers: {
    setAssetsData: (state, action) => {
      state.assets = action.payload;
    },

    setPrices: (state, action) => {
      state.prices = action.payload;
    },
  },
});

export const { setAssetsData, setPrices } = assetsSlice.actions;

export default assetsSlice.reducer;
