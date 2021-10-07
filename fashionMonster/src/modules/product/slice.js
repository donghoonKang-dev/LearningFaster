import { createSlice } from '@reduxjs/toolkit';
import {
  loadDetailAction,
  loadProductListAction,
  ProductListItem,
  ProductState,
  toggleActiveAction,
} from './thunk';

const initialState = {
  loadProductList: { loading: false, data: null, error: null },
  loadDetail: { loading: false, data: null, error: null },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    toggleActiveAction;
    builder
      .addCase(loadProductListAction.pending, state => {
        state.loadProductList.loading = true;
        state.loadProductList.data = null;
        state.loadProductList.error = null;
      })
      .addCase(loadProductListAction.fulfilled, (state, { payload }) => {
        state.loadProductList.loading = false;
        state.loadProductList.data = payload;
        state.loadProductList.error = null;
      })
      .addCase(loadProductListAction.rejected, (state, { payload }) => {
        state.loadProductList.loading = false;
        state.loadProductList.data = null;
        state.loadProductList.error = payload;
      })
      .addCase(toggleActiveAction.fulfilled, (state, { payload }) => {
        const idx = state.loadProductList.data?.findIndex(
          v => v.id === +payload
        );
        if (idx === -1) return;

        const isActive = (state.loadProductList.data)[idx].isActive;
        (state.loadProductList.data)[idx] = {
          ...(state.loadProductList.data)[idx],
          isActive: isActive === 1 ? 0 : 1,
        };
      })
      .addCase(loadDetailAction.pending, state => {
        state.loadDetail.loading = true;
        state.loadDetail.data = null;
        state.loadDetail.error = null;
      })
      .addCase(loadDetailAction.fulfilled, (state, { payload }) => {
        state.loadDetail.loading = false;
        state.loadDetail.data = payload;
        state.loadDetail.error = null;
      })
      .addCase(loadDetailAction.rejected, (state, { payload }) => {
        state.loadDetail.loading = false;
        state.loadDetail.data = null;
        state.loadDetail.error = payload;
      });
  },
});

const product = productSlice.reducer;

export default product;