import { createSlice } from '@reduxjs/toolkit';

const authorsSlice = createSlice({
  name: 'authors',
  initialState: [],
  reducers: {
    addAuthor(state, action) {
      state.push(action.payload);
    },
    removeAuthor(state, action) {
      return state.filter(author => author.id !== action.payload);
    },
  },
});

export const { addAuthor, removeAuthor } = authorsSlice.actions;
export default authorsSlice.reducer;
