import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';


export function useFetchMore(loading = false) {
  const [page, setPage] = useState(1);

  const FetchMore = useCallback(() => {
    const fetchMoreTrigger = useRef(null);

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

  return [FetchMore, page, setPage];
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