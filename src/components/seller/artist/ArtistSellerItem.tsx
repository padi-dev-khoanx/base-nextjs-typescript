import { Artist } from '@/src/type/artist.type';
import { routerConstant } from '@/src/constant/routerConstant';
import Image from 'next/image';
import Link from 'next/link';

export const ArtistSellerItem = ({ data }: { data: Artist }) => {
  return (
    <div className='flex justify-between items-center px-[24px] py-[27.5px] border-b border-b-[#D9D9D9]'>
      <div className='flex items-center'>
        <span className='pr-4 grow-0 shrink-0'>
          <Image src={data.logo} alt='' width={32} height={32} objectFit='cover' />
        </span>
        <span className='text-base w-80 truncate'>{data.name}</span>
      </div>
      <Link
        href={`${routerConstant.seller.artist_edit}?artist_id=${data.id}`}
        className='text-sm text-[#1890FF] hover:text-black/[0.85] grow-0 shrink-0'
      >
        変更
      </Link>
    </div>
  );
};
