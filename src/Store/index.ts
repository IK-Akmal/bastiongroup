import { configureStore } from '@reduxjs/toolkit';
import ProductTypeReducer from './Slices/ProductType';
import ProductReducer from './Slices/Product';
import GOSTReducer from './Slices/GOST';
import FiltersReducer from './Slices/filters';
import BasketReducer from './Slices/Basket';

export const store = configureStore({
  reducer: {
    ProductTypeReducer,
    ProductReducer,
    GOSTReducer,
    FiltersReducer,
    BasketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
