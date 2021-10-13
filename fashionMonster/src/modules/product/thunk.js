import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { hasMoreData, isMoreLoading } from './slice';

axios.defaults.baseURL = 'http://192.168.0.38:8080';
//axios.defaults.baseURL = 'http://3.38.18.80:8080';
axios.defaults.withCredentials = true;

const delay = async () => {
  await new Promise(res => {
    setTimeout(() => {
      res(1);
    }, 500);
  });
};

export const loadProductListAction = createAsyncThunk(
  'product/loadProductList',
  async (loadListData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get(
        `seller/product${loadListData.page ? `?page=${loadListData.page}&` : '?'}${loadListData.sort ? `sort=${loadListData.sort}&` : ''
        }${loadListData.keyword ? `keyword=${loadListData.keyword}` : ''}`
      );
      dispatch(hasMoreData(data.length === 10));
      dispatch(isMoreLoading(loadListData.page ? loadListData.page !== 1 : false));
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  }
);

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