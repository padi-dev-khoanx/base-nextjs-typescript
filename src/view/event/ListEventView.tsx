import { SellerHeader } from '@/src/components/seller/common/SellerHeader';
import { EventSellerItem } from '@/src/components/seller/event/EventSellerItem';
import { routerConstant } from '@/src/constant/routerConstant';
import Router from 'next/router';

export const ListEventView = () => {
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
  const listEvent = data?.data.items;
  return (
    <>
      <div className="flex font-['Roboto']">
        <div className='w-full'>
          <SellerHeader
            title='イベント'
            buttonRightBlue={() =>
              Router.push(routerConstant.seller.manage_artist.event.create(artistId))
            }
            buttonRightBlueText='新規追加'
          />
          <div>
            {listEvent.map((user: any) => (
              <EventSellerItem key={user.id} id={artistId} data={user} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
