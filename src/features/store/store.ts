import { configureStore } from '@reduxjs/toolkit';
import search from '../search-deezer/searchSlice';

export const store = configureStore({ reducer: { homepage: search } });

// utils
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
