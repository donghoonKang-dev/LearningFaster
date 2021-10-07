import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.0.38:8080';
axios.defaults.withCredentials = true;

export const loginAction = createAsyncThunk(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('seller/auth/login', loginData);
      return data;
    } catch (e) {
      console.error(e);
      return rejectWithValue({ message: e.response.data });
    }
  }
);

export const logoutAction = createAsyncThunk(
  'auth/logout',
  async (logoutData, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`seller/auth/logout?email=${logoutData.email}`);
      return data;
    } catch (e) {
      console.error(e);
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
      console.error(e);
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
      console.error(e);
      return rejectWithValue({ message: e.response.data });
    }
  });