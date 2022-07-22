/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FiltersType = {
  filtrePrice: number[],
  filterGOST: Array<string | boolean>,
  filterProductType: string
};

const initialState: FiltersType = {
  filtrePrice: [0, Number.MAX_SAFE_INTEGER],
  filterGOST: [],
  filterProductType: '',
};

const FiltersSlice = createSlice({
  name: 'ProductType',
  initialState,
  reducers: {
    setFilterPrice: (state, action: PayloadAction<number[]>) => {
      state.filtrePrice = action.payload;
    },
    setFilterGOST: (state, action: PayloadAction<(string | boolean)[]>) => {
      state.filterGOST = [...action.payload];
    },
    setFilterProductType: (state, action: PayloadAction<string>) => {
      state.filterProductType = action.payload;
    },

  },
});

export default FiltersSlice.reducer;
export const { setFilterPrice, setFilterGOST, setFilterProductType } = FiltersSlice.actions;
