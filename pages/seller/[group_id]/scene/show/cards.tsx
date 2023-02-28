import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerCardSceneView } from 'src/view/seller/scene/SellerCardSceneView';

const SellerCreateScene: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('scene');
  }, []);

  return (
    <LayoutSeller title='Card scenes'>
      <SellerCardSceneView />
    </LayoutSeller>
  );
};

export default SellerCreateScene;
