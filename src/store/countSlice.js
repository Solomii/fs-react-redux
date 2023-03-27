import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    addCount(state, action) {
      state.count++;
    },
    subCount(state, action) {
      state.count--;
    },
  },
});

export const { addCount, subCount } = countSlice.actions;
export default countSlice.reducer;
