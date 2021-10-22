import { useCallback } from 'react';
import { loadCategoryListAct, loadColorListAct, loadStoreListAct } from '.';
import { useAppDispatch, useAppSelector } from '..';

export function useUI() {
  const { storeList, colorList, categoryList } = useAppSelector(
    state => state.ui
  );
  const dispatch = useAppDispatch();

  const loadStoreDispatch = useCallback(() => {
    dispatch(loadStoreListAct(null));
  }, []);

  const loadColorDispatch = useCallback(() => {
    dispatch(loadColorListAct(null));
  }, []);

  const loadCategoryDispatch = useCallback(() => {
    dispatch(loadCategoryListAct(null));
  }, []);

  return {
    storeList,
    colorList,
    categoryList,
    loadStoreDispatch,
    loadColorDispatch,
    loadCategoryDispatch,
  };
}

export default useUI;