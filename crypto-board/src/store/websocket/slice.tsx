import { createSlice } from '@reduxjs/toolkit';

const websocketSlice = createSlice({
  name: 'websocket',
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    setWSData: (state, action) => {
      state.data = action.payload;
    },
    setWSError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setWSData, setWSError } = websocketSlice.actions;

export default websocketSlice.reducer;
