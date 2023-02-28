import { Series } from '@/src/type/sceneType';
import { routerConstant } from '@/src/utils/routerConstant';
import Link from 'next/link';

export const SeriesListItem = ({ data, id }: { data: Series; id: number }) => {
  return (
    <div className='flex justify-between items-center text-sm px-[24px] py-[16px] border-b border-b-[#D9D9D9]'>
      <div className='flex items-center'>
        <div>
          <span className='block truncate w-80'>{data.name}</span>
        </div>
      </div>
      <Link
        href={`${routerConstant.seller.managerGroup.series.show(id)}?series_id=${data.id}`}
        className='text-sm text-[#1890FF]'
      >
        <a href='' className='text-sm text-[#1890FF] hover:text-black/[0.85]'>
          詳細
        </a>
      </Link>
    </div>
  );
};
