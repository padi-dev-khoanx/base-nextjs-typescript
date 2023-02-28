import Image from 'next/image';

export const SeriesSellerItem = () => {
  return (
    <div className='flex justify-between items-center text-sm px-[24px] py-[16px] border-b border-b-[#D9D9D9]'>
      <div className='flex items-center'>
        <div className='w-[64px] h-[64px]'>
          <Image src='/img/img-meta.svg' alt='' height={64} width={64} objectFit='cover' />
        </div>
        <div className='pl-[16px]'>
          <p className='text-sm leading-[22px]'>
            <span className='pr-[16px]'>#0001</span>
            <span>森保まどか「ビーサンはなぜなくなるのか」ソロパート</span>
          </p>
          <span className='block text-[#8C8C8C] text-[13px] leading-[15px]'>
            2022秋公演「Spotlight」/ SR / 5000枚
          </span>
        </div>
      </div>
      <div>
        <a className='text-sm text-[#1890FF] pr-[16px]' href='#'>
          詳細
        </a>
        <a className='text-sm text-[#1890FF]' href='#'>
          変更
        </a>
      </div>
    </div>
  );
};
