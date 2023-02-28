import type { NextPage } from 'next';
import { useMutation } from 'react-query';
import { useLoading } from '../../../../../src/hooks/useLoading';
import { ParamsInviteUserGroup } from '../../../../../src/type/api/seller/userGroupType';
import sellerUserGroupApi from '../../../../../src/api/seller/userGroupApi';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerCreateUserView } from 'src/view/seller/user/SellerCreateUserView';

const SellerCreateUserGroup: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('user');
  }, []);

  const mutationInviteUserGroup = useMutation((params: ParamsInviteUserGroup) => {
    return sellerUserGroupApi.invite(params);
  });

  useLoading(mutationInviteUserGroup.isLoading);

  return (
    <LayoutSeller title='Create user'>
      <SellerCreateUserView />
    </LayoutSeller>
  );
};

export default SellerCreateUserGroup;
