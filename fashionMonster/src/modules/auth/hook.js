import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../index';
import { loginAction, logoutAction, signupAction, addRecommAction, emailCheckAction } from './thunk';

export function useAuth() {
  const { signup, login, emailCheck } = useAppSelector(state => state.auth);

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
  const emailCheckDispatch = useCallback((data) => {
    dispatch(emailCheckAction(data));
  }, []);

  return {
    signup,
    signupDispatch,
    login,
    loginDispatch,
    emailCheck,
    emailCheckDispatch,
    logoutDispatch,
    addRecommDispatch,
  };
}