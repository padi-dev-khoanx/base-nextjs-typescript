import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerListSceneView } from 'src/view/seller/scene/SellerListSceneView';

const SellerScene: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('scene');
  }, []);

  return (
    <LayoutSeller title='List scenes'>
      <SellerListSceneView />
    </LayoutSeller>
  );
};

export default SellerScene;
