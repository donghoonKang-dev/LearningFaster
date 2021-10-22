import { createSlice } from '@reduxjs/toolkit';
import { loadStoreListAct, loadColorListAct, loadCategoryListAct } from './thunk';

const initialState = {
  toastPopUp: { message: null, open: false, visible: false },
  storeList: [],
  colorList: [],
  categoryList: [],
};

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadStoreListAct.fulfilled, (state, { payload }) => {
        state.storeList = payload;
      })
      .addCase(loadColorListAct.fulfilled, (state, { payload }) => {
        state.colorList = payload;
      })
      .addCase(loadCategoryListAct.fulfilled, (state, { payload }) => {
        state.categoryList = payload;
      });
  },
});

const ui = uiSlice.reducer;
export default ui;