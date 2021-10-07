import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MyKnownError, ProductDetail, ProductListItem, ProductPayload } from '.';

axios.defaults.baseURL = 'http://192.168.0.38:8080';
axios.defaults.withCredentials = true;

export const loadProductListAction = createAsyncThunk(
  'product/loadProductList',
  async (loadListData, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `seller/product${loadListData.page ? `?page=${loadListData.page}&` : '?'}${loadListData.sort ? `sort=${loadListData.sort}&` : ''}${loadListData.keyword ? `keyword=${loadListData.keyword}` : ''}`
      );
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
  async ({ productId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `seller/product/${productId}?type=updated`
      );
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  }
);