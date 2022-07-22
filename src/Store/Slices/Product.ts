/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProduct from '../../Model/IProduct';

type ProductType = {
  products: Record<string, IProduct>
};

const initialState: ProductType = {
  products: {},
};

const ProductTypeSlice = createSlice({
  name: 'ProductType',
  initialState,
  reducers: {

    addProduct: (state, action: PayloadAction<IProduct>) => {
      const { id } = action.payload;
      state.products[id] = action.payload;
    },

  },
});

export default ProductTypeSlice.reducer;
export const { addProduct } = ProductTypeSlice.actions;
