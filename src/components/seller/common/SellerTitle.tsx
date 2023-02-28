import Image from 'next/image';

export const SellerTitle = ({ title, required = true }: { title: string; required?: boolean }) => {
  return (
    <>
      <label className='flex tracking-wide font-normal pb-[8px]' htmlFor='grid-first-name'>
        {required ? (
          <div className='pr-1'>
            <Image src='/img/star-required.svg' width={7} height={7} alt='' className='mb-px' />
          </div>
        ) : null}
        <span className='text-sm leading-[22px]'>{title}</span>
      </label>
    </>
  );
};
