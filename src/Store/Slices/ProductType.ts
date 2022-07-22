/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProductType from '../../Model/IProductType';

type ProductType = {
  productType: Record<string, IProductType>
};

const initialState: ProductType = {
  productType: {},
};

const ProductTypeSlice = createSlice({
  name: 'ProductType',
  initialState,
  reducers: {

    addProductType: (state, action: PayloadAction<IProductType>) => {
      const { id } = action.payload;
      state.productType[id] = action.payload;
    },

  },
});

export default ProductTypeSlice.reducer;
export const { addProductType } = ProductTypeSlice.actions;
