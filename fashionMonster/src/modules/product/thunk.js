import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { hasMoreData, isMoreLoading } from './slice';

axios.defaults.baseURL = 'https://api.fstr.shop';
//axios.defaults.baseURL = 'http://192.168.0.38:8081';
axios.defaults.withCredentials = true;

const delay = async () => {
  await new Promise(res => {
    setTimeout(() => {
      res(1);
    }, 350);
  });
};

//NOTE: 상품 리스트
export const loadProductListAction = createAsyncThunk(
  'product/loadProductList',
  async (loadListData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get(
        `seller/product${loadListData.page ? `?page=${loadListData.page}&` : '?'}${loadListData.sort ? `sort=${loadListData.sort}&` : ''
        }${loadListData.keyword ? `keyword=${loadListData.keyword}` : ''}`
      );
      dispatch(hasMoreData(data.length === 14));
      dispatch(isMoreLoading(loadListData.page ? loadListData.page !== 1 : false));
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  }
);

//NOTE: 진열상태 수정
export const toggleActiveAction = createAsyncThunk(
  'product/toggleActive',
  async ({ productId, isActive }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`seller/product/visible/${productId}`, {
        isActive,
      });
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  }
);

//NOTE: 상품 디테일 조회
export const loadDetailAction = createAsyncThunk(
  'product/loadDetail',
  async ({ type, productId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `seller/product/${productId}?type=${type}`
      );
      await delay();
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  }
);

//NOTE: 상품 등록
export const addProductAction = createAsyncThunk(
  'product/addProduct',
  async (addProductData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `seller/product/new`,
        addProductData
      );
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  }
);

//NOTE: 상품 수정
export const updateProductAction = createAsyncThunk(
  'product/updateProduct',
  async (updateProductData, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `seller/product/${updateProductData.ProductId}`,
        updateProductData
      );
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  }
);

//NOTE: 상품 삭제
export const removeProductAction = createAsyncThunk(
  'product/removeProduct',
  async ({ ProductId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`seller/product/${ProductId}`);
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  }
);

//NOTE: 총 상품 수량
export const loadProductCntAction = createAsyncThunk(
  'product/loadCnt',
  async ({ keyword }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`seller/product/count${keyword ? `?keyword=${keyword}` : ''}`);
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  }
);