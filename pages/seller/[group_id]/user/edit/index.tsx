import type { NextPage } from 'next';
import { useMutation } from 'react-query';
import { useLoading } from '../../../../../src/hooks/useLoading';
import {
  ParamsChangeRoleUserGroup,
  ParamsRemoveUserGroup,
} from '../../../../../src/type/api/seller/userGroupType';
import sellerUserGroupApi from '../../../../../src/api/seller/userGroupApi';
import { useSetRecoilState } from 'recoil';
import { currentMenuItemState } from '../../../../../src/recoil/sellerSidebarRecoilState';
import { useEffect } from 'react';
import { LayoutSeller } from 'src/components/layouts/LayoutSeller';
import { SellerUpdateUserView } from 'src/view/seller/user/SellerUpdateUserView';

const SellerEditUserGroup: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem('user');
  }, []);

  const mutationRemoveUserGroup = useMutation((params: ParamsRemoveUserGroup) => {
    return sellerUserGroupApi.remove(params);
  });

  const mutationChangeRoleUserGroup = useMutation((params: ParamsChangeRoleUserGroup) => {
    return sellerUserGroupApi.changeRole(params);
  });

  useLoading(mutationRemoveUserGroup.isLoading || mutationChangeRoleUserGroup.isLoading);

  return (
    <LayoutSeller title='Update user'>
      <SellerUpdateUserView />
    </LayoutSeller>
  );
};

export default SellerEditUserGroup;
