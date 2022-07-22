/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GostType = {
  gosts: string[];
};

const initialState: GostType = {
  gosts: [],
};

const GOSTSlice = createSlice({
  name: 'ProductType',
  initialState,
  reducers: {

    addGOST: (state, action: PayloadAction<string>) => {
      const { payload } = action;

      if (!state.gosts.find((gost) => gost === payload)) {
        state.gosts = [...state.gosts, payload];
      }
    },

  },
});

export default GOSTSlice.reducer;
export const { addGOST } = GOSTSlice.actions;
