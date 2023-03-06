import { UserGroup } from '@/src/type/artist.type';
import { routerConstant } from '@/src/constant/routerConstant';
import Link from 'next/link';
import React from 'react';

export const UserSellerItem = ({ data, id }: { data: UserGroup; id: string }) => {
  console.log('link', routerConstant.seller.manage_artist.user.edit(id, String(data.id)));
  return (
    <div className='flex justify-between items-center px-[24px] py-[31px] border-b border-b-[#D9D9D9] ml-1'>
      <div className='flex-1'>
        <strong className='text-base'>{data.name}</strong>
      </div>
      <Link
        className='rounded-sm text-sm leading-[22px] px-4 py-2 text-blue-500 text-blue-100 hover:bg-blue-600 duration-300'
        href={routerConstant.seller.manage_artist.user.edit(id, String(data.id))}
      >
        変更
      </Link>
    </div>
  );
};
