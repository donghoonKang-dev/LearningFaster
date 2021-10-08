import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../index';
import { loginAction, logoutAction, signupAction, addRecommAction } from './thunk';

export function useAuth() {
  const { signup, login } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();

  const loginDispatch = useCallback((data) => {
    dispatch(loginAction(data));
  }, []);
  const logoutDispatch = useCallback((data) => {
    dispatch(logoutAction(data));
  }, []);
  const signupDispatch = useCallback((data) => {
    dispatch(signupAction(data));
  }, []);
  const addRecommDispatch = useCallback((data) => {
    dispatch(addRecommAction(data));
  }, []);

  return {
    signup,
    login,
    loginDispatch,
    logoutDispatch,
    signupDispatch,
    addRecommDispatch,
  };
}