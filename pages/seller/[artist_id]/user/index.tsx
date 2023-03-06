import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import ListUserView from '@/src/view/user/ListUserView';

const User = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('User');
  }, []);
  const route = useRouter();
  console.log('list', route);

  return (
    <LayoutSeller title='List user'>
      <ListUserView />
    </LayoutSeller>
  );
};

export default User;
