import { useCallback } from 'react';
import {
  addProductAction,
  loadDetailAction,
  loadProductListAction,
  removeProductAction,
  toggleActiveAction,
  updateProductAction,
} from './thunk';
import { useAppDispatch, useAppSelector } from '../index';

export function useProduct() {
  const { addProduct, loadProductList, loadDetail, hasMore, loadMore } = useAppSelector(
    state => state.product
  );

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

  const addProductDispatch = useCallback((data) => {
    dispatch(addProductAction(data));
  }, []);

  const updateProductDispatch = useCallback((data) => {
    dispatch(updateProductAction(data));
  }, []);

  const removeProductDispatch = useCallback((data) => {
    dispatch(removeProductAction(data));
  }, []);

  return {
    addProduct,
    loadMore,
    hasMore,
    loadDetail,
    loadProductList,
    loadProductListDispatch,
    loadDetailDispatch,
    toggleActiveDispatch,
    addProductDispatch,
    updateProductDispatch,
    removeProductDispatch,
  };
};