import { createSlice } from '@reduxjs/toolkit';
import {
  addProductAction,
  loadDetailAction,
  loadProductCntAction,
  loadProductListAction,
  removeProductAction,
  toggleActiveAction,
  updateProductAction,
} from './thunk';

const initialState = {
  loadProductList: { loading: false, data: null, error: null },
  loadDetail: { loading: false, data: null, error: null },
  addProduct: { loading: false, data: null, error: null },
  updateProduct: { loading: false, data: null, error: null },
  totalCnt: 0,
  loadMore: false,
  hasMore: true,
  page: 1,
  reloadBlock: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetDetail(state) {
      state.loadDetail = initialState.loadDetail;
    },
    resetRegist(state) {
      state.addProduct = initialState.addProduct;
    },
    isMoreLoading(state, { payload }) {
      state.loadMore = payload;
    },
    hasMoreData(state, { payload }) {
      state.hasMore = payload;
    },
    setPage(state, { payload }) {
      payload === 'next' ? (state.page = state.page + 1) : (state.page = payload);
    },
    setReloadBlock(state, { payload }) {
      state.reloadBlock = payload;
    },
  },
  extraReducers: builder => {
    toggleActiveAction;
    builder
      .addCase(loadProductListAction.pending, state => {
        state.loadProductList.loading = true;
        state.loadProductList.error = null;
      })
      .addCase(loadProductListAction.fulfilled, (state, { payload }) => {
        state.loadProductList.loading = false;
        state.loadProductList.data = state.loadMore
          ? state.loadProductList.data.concat(payload)
          : payload;
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
        state.loadProductList.data[idx] = {
          ...state.loadProductList.data[idx],
          isActive: isActive === 1 ? 0 : 1,
          state: 2,
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
      })
      .addCase(addProductAction.pending, state => {
        state.addProduct.loading = true;
        state.addProduct.data = null;
        state.addProduct.error = null;
      })
      .addCase(addProductAction.fulfilled, (state, { payload }) => {
        state.addProduct.loading = false;
        state.addProduct.data = payload;
        state.addProduct.error = null;
      })
      .addCase(addProductAction.rejected, (state, { payload }) => {
        state.addProduct.loading = false;
        state.addProduct.data = null;
        state.addProduct.error = payload;
      })
      .addCase(updateProductAction.pending, state => {
        state.updateProduct.loading = true;
        state.updateProduct.data = null;
        state.updateProduct.error = null;
      })
      .addCase(updateProductAction.fulfilled, (state, { payload }) => {
        state.updateProduct.loading = false;
        state.updateProduct.data = payload;
        state.updateProduct.error = null;

        const idx = state.loadProductList.data?.findIndex(
          v => v.id === +payload.id
        );
        if (idx === -1) return;

        state.loadProductList.data[idx] = {
          ...state.loadProductList.data[idx],
          state: 2,
          thumbnail: payload.thumbnail,
          price: payload.price,
          name: payload.name,
        };
      })
      .addCase(updateProductAction.rejected, (state, { payload }) => {
        state.updateProduct.loading = false;
        state.updateProduct.data = null;
        state.updateProduct.error = payload;
      })
      .addCase(removeProductAction.fulfilled, (state, { payload }) => {
        state.totalCnt = state.totalCnt - 1;
        const idx = state.loadProductList.data?.findIndex(
          v => v.id === +payload
        );
        if (idx === -1) return;
        state.loadProductList.data = (
          state.loadProductList.data
        ).filter(prod => prod.id !== +payload);
      })
      .addCase(loadProductCntAction.fulfilled, (state, { payload }) => {
        state.totalCnt = payload;
      })
  },
});

const product = productSlice.reducer;
export const {
  resetDetail,
  hasMoreData,
  setReloadBlock,
  isMoreLoading,
  resetRegist,
  setPage,
} = productSlice.actions;

export default product;