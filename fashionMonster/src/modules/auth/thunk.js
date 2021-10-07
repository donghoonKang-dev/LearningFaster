import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://3.38.18.80:8080';
axios.defaults.withCredentials = true;

export const loginAction = createAsyncThunk(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('seller/auth/login', loginData);
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  }
);

export const logoutAction = createAsyncThunk(
  'auth/logout',
  async ({ email }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`seller/auth/logout?email=${email}`);
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  });

export const signupAction = createAsyncThunk(
  'auth/signup',
  async (signupData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`seller/auth/regist`, signupData);
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  });

export const addRecommAction = createAsyncThunk(
  'auth/addRecomm',
  async (recommenderData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`seller/auth/recommender`, recommenderData);
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  });