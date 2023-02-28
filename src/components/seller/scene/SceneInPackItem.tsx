import { RARITY } from '@/src/utils/contants';
import Image from 'next/image';

export const SceneInPackItem = ({ data }: any) => {
  return (
    <li className='w-1/2 px-[5px] pb-[10px]'>
      <div>
        <div>
          <Image
            className='w-full'
            src={data.images[0]}
            alt=''
            width={291}
            height={291}
            objectFit='cover'
          />
        </div>
        <div className='p-[7px] text-black/[0.85]'>
          <h3 className='text-sm leading-[22px] font-bold'>{data.name}</h3>
          <p className='text-xs leading-[20px] font-normal'>{data.series.name}</p>
          <p className='text-sm leading-[22px] font-bold pt-[7px]'>{RARITY?.[data.rarity]}</p>
          <p className='text-sm leading-[22px] font-bold '>
            #{(data?.number_copies - data?.number_copies_owned).toLocaleString()} / #
            {data?.number_copies.toLocaleString()}
          </p>
        </div>
      </div>
    </li>
  );
};
