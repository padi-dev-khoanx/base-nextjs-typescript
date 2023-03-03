import { ArrowLeftOutlined } from '@ant-design/icons';

export const SellerHeader = ({
  enableBackIcon = false,
  title = '',
  buttonRightBlue,
  buttonRightBlueText,
  buttonRightWhite,
  buttonRightWhiteText,
  status,
  customBack,
  subTitle,
  disableBorder = false,
}: any) => {
  return (
    <div
      className={`flex justify-between ${
        !disableBorder && 'border-b border-b-[#DADADA]'
      } py-[22px] pl-6 pr-[38px]`}
    >
      <div>
        <div className='flex items-center cursor-pointer' onClick={customBack}>
          {enableBackIcon && <ArrowLeftOutlined className='pr-[17px]' />}
          <div className={`${!subTitle && 'truncate w-96'} 'text-xl leading-[28px] font-medium'`}>
            {title}
          </div>
          {subTitle && (
            <span className='text-black/[0.45] text-sm leading-[22px] pl-[12px]'>{subTitle}</span>
          )}
        </div>
        {status && (
          <div className='inline-block mt-[5px]'>
            <p
              className='text-sm leading-[22px] text-black/[0.85] mr-[16px] relative before:absolute before:right-0 before:h-[6px] before:w-[6px]
            before:bg-[#F5222D] before:top-[-3px] before:rounded-full'
            >
              {status}
            </p>
          </div>
        )}
      </div>

      <div>
        {buttonRightWhite && (
          <button
            className='rounded-sm text-sm leading-[22px] px-4 py-2 bg-white text-black/85 border border-[#D9D9D9] mr-[8px] hover:bg-blue-600 duration-300'
            onClick={buttonRightWhite}
          >
            {buttonRightWhiteText}
          </button>
        )}
        {buttonRightBlue && (
          <button
            className='rounded-sm text-sm leading-[22px] px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300'
            onClick={buttonRightBlue}
          >
            {buttonRightBlueText}
          </button>
        )}
      </div>
    </div>
  );
};
