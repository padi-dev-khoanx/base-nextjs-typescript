import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { loadingState } from '../recoil/loading.recoil';

export const useLoading = (isLoading: boolean) => {
  const setLoading = useSetRecoilState(loadingState);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);
};
