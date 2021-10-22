import { useCallback } from 'react';
import {
  addProductAction,
  loadDetailAction,
  loadProductCntAction,
  loadProductListAction,
  removeProductAction,
  toggleActiveAction,
  updateProductAction,
} from './thunk';
import { useAppDispatch, useAppSelector } from '../index';
import { setPage, setReloadBlock } from './slice';

export function useProduct() {
  const {
    reloadBlock,
    page,
    addProduct,
    loadProductList,
    loadDetail,
    hasMore,
    loadMore,
    totalCnt
  } = useAppSelector(state => state.product);

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

  const loadProductCntDispatch = useCallback((data) => {
    dispatch(loadProductCntAction(data));
  }, []);

  const setPageDispatch = useCallback((data) => {
    dispatch(setPage(data));
  }, []);

  const setReloadBlockDispatch = useCallback((data) => {
    dispatch(setReloadBlock(data));
  }, []);

  return {
    page,
    reloadBlock,
    totalCnt,
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
    loadProductCntDispatch,
    setPageDispatch,
    setReloadBlockDispatch,
  };
};