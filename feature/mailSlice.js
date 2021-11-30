import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mail: null,
  showCompose: false,
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    showCompose: (state, action) => {
      state.showCompose = true;
    },
    hideCompas: (state, action) => {
      state.showCompose = false;
    },
    seeMail: (state, action) => {
      state.mail = action.payload;
    },
  },
});

export const { showCompose, hideCompas, seeMail } = mailSlice.actions;

export default mailSlice.reducer;
