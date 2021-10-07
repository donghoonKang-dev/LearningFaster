import { createSlice } from '@reduxjs/toolkit';
import { loginAction, logoutAction, signupAction, addRecommAction } from './thunk';

const initialState = {
  login: { loading: false, data: null, error: null },
  signup: { loading: false, data: null, error: null },
  addRecomm: { loading: false, data: null, error: null },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAction.pending, state => {
        state.login.loading = true;
        state.login.data = null;
        state.login.error = null;
      })
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        state.login.loading = false;
        state.login.data = payload;
        state.login.error = null;
      })
      .addCase(loginAction.rejected, (state, { payload }) => {
        state.login.loading = false;
        state.login.data = null;
        state.login.error = payload;
      })
      .addCase(logoutAction.fulfilled, state => {
        state.login.loading = false;
        state.login.data = null;
        state.login.error = null;
      })
      .addCase(logoutAction.rejected, (state, { payload }) => {
        state.login.loading = false;
        state.login.data = null;
        state.login.error = payload;
      })
      .addCase(signupAction.pending, state => {
        state.signup.loading = true;
        state.signup.data = null;
        state.signup.error = null;
      })
      .addCase(signupAction.fulfilled, (state, { payload }) => {
        state.signup.loading = false;
        state.signup.data = payload;
        state.signup.error = null;
      })
      .addCase(signupAction.rejected, (state, { payload }) => {
        state.signup.loading = false;
        state.signup.data = null;
        state.signup.error = payload;
      })
      .addCase(addRecommAction.pending, state => {
        state.addRecomm.loading = true;
        state.addRecomm.data = null;
        state.addRecomm.error = null;
      })
      .addCase(addRecommAction.fulfilled, (state, { payload }) => {
        state.addRecomm.loading = false;
        state.addRecomm.data = payload.name;
        state.addRecomm.error = null;
      })
      .addCase(addRecommAction.rejected, (state, { payload }) => {
        state.addRecomm.loading = false;
        state.addRecomm.data = null;
        state.addRecomm.error = payload;
      });
  },
});

const auth = authSlice.reducer;

export default auth;