/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import BasketProudct from '../../Model/IBasket';

type BasketType = {
  products: Record<string, BasketProudct>
};

const initialState: BasketType = {
  products: {},
};

const BasketSlice = createSlice({
  name: 'ProductType',
  initialState,
  reducers: {

    addProductToBasket: (state, action: PayloadAction<BasketProudct>) => {
      const { id } = action.payload.product;
      if (state.products[id]) {
        state.products[id].count += action.payload.count;
      } else {
        state.products[id] = action.payload;
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.products[id]) {
        delete state.products[id];
      }
    },
    setCount: (state, action: PayloadAction<{ id: string, count: number }>) => {
      const { count, id } = action.payload;
      if (state.products[id]) {
        state.products[id].count = count;
      }
    },
    removeAll: () => initialState,
  },
});

export default BasketSlice.reducer;
export const {
  addProductToBasket, removeProduct, removeAll, setCount,
} = BasketSlice.actions;
