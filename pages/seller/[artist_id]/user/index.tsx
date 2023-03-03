import { LayoutSeller } from '@/src/components/layouts/LayoutSeller';
import { currentMenuItemState } from '@/src/recoil/seller-sidebar.recoil';
import ListUser from '@/src/view/user/ListUser';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

const User = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('User');
  }, []);
  const route = useRouter();
  console.log('list', route);

  return (
    <LayoutSeller title='List user'>
      <ListUser />
    </LayoutSeller>
  );
};

export default User;
