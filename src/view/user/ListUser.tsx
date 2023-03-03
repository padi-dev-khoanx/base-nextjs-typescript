import { SellerHeader } from '@/src/components/seller/common/SellerHeader';
import { UserSellerItem } from '@/src/components/seller/user/UserSellerItem';
import { UserGroup } from '@/src/type/artist.type';
import { routerConstant } from '@/src/constant/routerConstant';
import Router from 'next/router';
import React from 'react';

const ListUser = () => {
  const artistId = '1';
  const data: any = {
    data: {
      items: [
        {
          id: 1,
          name: '22',
        },
      ],
    },
  };
  const listUser = data?.data.items;

  return (
    <div>
      <SellerHeader
        title='User'
        buttonRightBlue={() =>
          Router.push(routerConstant.seller.manage_artist.user.invite(artistId))
        }
        buttonRightBlueText='招待'
      />
      {listUser.map((user: UserGroup) => (
        <UserSellerItem key={user.id} id={artistId} data={user} />
      ))}
    </div>
  );
};

export default ListUser;
