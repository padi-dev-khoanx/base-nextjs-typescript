import type { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerUpdateSceneView } from 'src/view/seller/scene/SellerUpdateSceneView';

const SellerEditScene: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('scene');
  }, []);

  return (
    <LayoutSeller title='Update scenes'>
      <SellerUpdateSceneView />
    </LayoutSeller>
  );
};

export default SellerEditScene;
