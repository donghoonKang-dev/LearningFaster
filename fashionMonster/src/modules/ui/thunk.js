import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_HOST;
axios.defaults.withCredentials = true;

//NOTE: 스토어 데이터 조회
export const loadStoreListAct = createAsyncThunk(
  'ui/loadStore',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`seller/data/store`);
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  });

//NOTE: 색상 데이터 조회
export const loadColorListAct = createAsyncThunk(
  'ui/loadColor',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`seller/data/color`);
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  });

//NOTE: 카테고리 데이터 조회
export const loadCategoryListAct = createAsyncThunk(
  'ui/loadCategory',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`seller/data/category`);
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  });