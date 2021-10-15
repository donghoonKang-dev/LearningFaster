import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { useProduct } from '../modules/product';

export function useFetchMore(loading = false) {
  const { setPageDispatch: setPage, setReloadBlockDispatch } = useProduct();

  const FetchMore = useCallback(() => {
    useEffect(() => {
      const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) setPage(prev => prev + 1);
      });
      if (fetchMoreTrigger.current) {
        fetchMoreObserver.observe(fetchMoreTrigger.current);
      }
      return () => {
        if (fetchMoreTrigger.current) {
          fetchMoreObserver.unobserve(fetchMoreTrigger.current);
        }
      };
    }, []);

    return (
      <View style={styles.fetchMoreTriggerContainer}
        id="fetchMore"
        className={loading ? 'loading' : ''}
        ref={fetchMoreTrigger}
      >
        {loading ? (
          <Image
            source={{ uri: 'https://img.zcool.cn/community/0113fc5af2b0eaa801216045f77c6f.gif' }}
            style={styles.loadingImg}
          />
        ) : (
          <Text style={styles.text}>모든 데이터를 불러왔습니다.</Text>
        )}
      </View>
    );
  }, [loading]);

  return [FetchMore];
}

const styles = StyleSheet.create({
  fetchMoreTriggerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingImg: {
    height: 60,
  },
  text: {
    paddingVertical: 20,
    color: '#aaa',
    fontSize: 14,
  }
});

export default useFetchMore;