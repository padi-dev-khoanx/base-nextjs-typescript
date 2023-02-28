import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerCreateSceneView } from 'src/view/seller/scene/SellerCreateSceneView';

const SellerCreateScene: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('scene');
  }, []);

  return (
    <LayoutSeller title='Create scenes'>
      <SellerCreateSceneView />
    </LayoutSeller>
  );
};

export default SellerCreateScene;
