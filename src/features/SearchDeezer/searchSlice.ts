import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type HomepageStateType = {
  query: string;
};

const initialState: HomepageStateType = {
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
