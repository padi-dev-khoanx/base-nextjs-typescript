import { SellerHeader } from '@/src/components/seller/common/SellerHeader';
import { TicketSellerItem } from '@/src/components/seller/event/ticket/TicketSellerItem';
import { routerConstant } from '@/src/constant/routerConstant';
import Router from 'next/router';

export const ListEventTicket = () => {
  const artistId = '1';
  const eventId = '1';

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
  const listTicket = data?.data.items;
  return (
    <>
      <div className="flex font-['Roboto']">
        <div className='w-full'>
          <SellerHeader
            title='チケット'
            buttonRightBlue={() =>
              Router.push(
                routerConstant.seller.manage_artist.event.ticket.create(artistId, eventId),
              )
            }
            buttonRightBlueText='新規追加'
          />
          <div>
            {listTicket.map((ticket: any) => (
              <TicketSellerItem
                key={ticket.id}
                eventId={eventId}
                artistId={artistId}
                data={ticket}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
