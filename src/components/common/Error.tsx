import Image from 'next/image';
import Router from 'next/router';
export const Error = ({
  errorNumber,
  errorTitle,
  errorDesc,
}: {
  errorNumber: number;
  errorTitle: string;
  errorDesc: string;
}) => {
  return (
    <>
      <div className='w-full h-[100vh] md:bg-error-pc bg-error bg-cover relative'>
        <div className='text-white text-center absolute top-2/4 left-2/4 -translate-y-2/4	-translate-x-2/4'>
          <div className='relative w-[176px] h-[68px] md:w-[268px] md:h-[98px] mx-auto'>
            <Image src='/img/logo-menu.svg' alt='' fill className='block' />
          </div>
          <div className='font-bold text-5xl leading-[48px] font-cabin mt-[26px]'>
            {errorNumber}
          </div>
          <div className='font-bold text-3xl leading-[48px] font-cabin mb-1.5'>{errorTitle}</div>
          <div className='font-bold text-sm leading-[21px] font-cabin mb-6 px-[51px] md:px-0'>
            {errorDesc}
          </div>
          <button
            className='w-[311px] p-[14.5px] text-gray-1 font-bold bg-white rounded-[40px]'
            onClick={() => console.log('hello')}
          >
            TOPページへ
          </button>
        </div>
      </div>
    </>
  );
};
