import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.fstr.shop';
//axios.defaults.baseURL = 'http://192.168.0.38:8081';
axios.defaults.withCredentials = true;

//NOTE: 로그인
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

//NOTE: 로그아웃
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

//NOTE: 회원가입
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

//NOTE: 추천인 등록
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

//NOTE: 이메일 중복 확인
export const emailCheckAction = createAsyncThunk(
  'auth/emailCheck',
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`seller/auth/email?email=${email}`);
      return data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data });
    }
  });