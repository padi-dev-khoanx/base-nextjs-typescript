import type { NextPage } from 'next';
import { useMutation } from 'react-query';
import { useLoading } from '../../../../../src/hooks/useLoading';
import sellerSeriesApi from '../../../../../src/api/seller/seriesApi';
import { ParamsCreateSeries } from '../../../../../src/type/api/seller/seriesType';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerCreateSeriesView } from 'src/view/seller/series/SellerCreateSeriesView';

const SellerCreateSeries: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('series');
  }, []);

  const mutationCreateSeries = useMutation((params: ParamsCreateSeries) => {
    return sellerSeriesApi.create(params);
  });

  useLoading(mutationCreateSeries.isLoading);

  return (
    <LayoutSeller title='Create series'>
      <SellerCreateSeriesView />
    </LayoutSeller>
  );
};

export default SellerCreateSeries;
