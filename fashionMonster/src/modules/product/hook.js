import { useCallback } from 'react';
import {
  loadDetailAction,
  loadProductListAction,
  ProductPayload,
  toggleActiveAction,
} from './thunk';
import { useAppDispatch, useAppSelector } from '..';

export function useProduct() {
  const { loadProductList, loadDetail } = useAppSelector(state => state.product);

  const dispatch = useAppDispatch();

  const loadProductListDispatch = useCallback((data) => {
    dispatch(loadProductListAction(data));
  }, []);

  const toggleActiveDispatch = useCallback((data) => {
    dispatch(toggleActiveAction(data));
  }, []);

  const loadDetailDispatch = useCallback((data) => {
    dispatch(loadDetailAction(data));
  }, []);

  return {
    loadDetail,
    loadProductList,
    loadProductListDispatch,
    loadDetailDispatch,
    toggleActiveDispatch,
  };
};