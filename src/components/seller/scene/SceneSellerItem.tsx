import { Scene } from '@/src/type/sceneType';
import { routerConstant } from '@/src/utils/routerConstant';
import Link from 'antd/lib/typography/Link';
import Image from 'next/image';

export const SceneSellerItem = ({ data, id }: { data: Scene; id: number }) => {
  return (
    <div className='flex justify-between items-center text-sm px-[24px] py-[16px] border-b border-b-[#D9D9D9]'>
      <div className='flex items-center'>
        <div className='w-[64px] h-[64px]'>
          <Image src={data.images[0]} alt='' height={64} width={64} objectFit='cover' />
        </div>
        <div className='pl-[16px]'>
          <p className='text-sm leading-[22px] truncate w-80'>{data.name}</p>
          <span className='block text-[#8C8C8C] text-[13px] leading-[15px]'>
            {data.series.name} /{' '}
            <span className='inline-block first-letter:uppercase'>{data.rarity}</span> /{' '}
            {data.number_copies}枚
          </span>
        </div>
      </div>
      <div>
        <Link
          className='text-sm text-[#1890FF] pr-[16px] hover:text-black/[0.85]'
          href={`${routerConstant.seller.managerGroup.scene.show(id)}?scene_id=${data.id}`}
        >
          詳細
        </Link>
        {data.status === 'created' && (
          <Link
            href={`${routerConstant.seller.managerGroup.scene.edit(id)}?scene_id=${data.id}`}
            className='text-sm text-[#1890FF] hover:text-black/[0.85]'
          >
            変更
          </Link>
        )}
      </div>
    </div>
  );
};
