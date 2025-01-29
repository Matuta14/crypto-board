import { createSlice } from '@reduxjs/toolkit';

const assetsSlice = createSlice({
  name: 'assets',
  initialState: {
    assets: null,
    selectedCoin: null,
  },
  reducers: {
    setAssetsData: (state, action) => {
      state.assets = action.payload;
    },
    //maybe have to be deleted
    setCoin: (state, action) => {
      state.selectedCoin = action.payload;
    },
  },
});

export const { setAssetsData, setCoin } = assetsSlice.actions;

export default assetsSlice.reducer;
