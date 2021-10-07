import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import auth from './auth/slice';
import product from './product/slice';

const prod = process.env.NODE_ENV === 'production';

const rootReducer = combineReducers({ auth, product });

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    if (prod) return getDefaultMiddleware();
    else return getDefaultMiddleware();
  },
  devTools: !prod,
});

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export default store;