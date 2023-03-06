// import { SellerInput } from "@/src/components/common/SellerInput";
// import { SellerTextArea } from "@/src/components/common/SellerTextArea";
import { SellerHeaderUpdateCreate } from '@/src/components/seller/common/SellerHeaderUpdateCreate';
import AreaTag from '@/src/components/seller/input/AreaTag';
import InputSeller from '@/src/components/seller/input/InputSeller';
import InputUrlSeller from '@/src/components/seller/input/InputUrlSeller';
import TextAreaSeller from '@/src/components/seller/input/TextAreaSeller';
import { UploadImage } from '@/src/components/upload/UploadImage';
import { ParamsUpdateGroup } from '@/src/type/artist.type';
import { ErrorMessage } from '@hookform/error-message';
import { UploadProps } from 'antd';
import { UploadFile } from 'antd/lib/upload';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export const UpdateArtist = () => {
  const groupData: any = {};
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileLogo, setFileLogo] = useState<UploadFile[]>([]);
  const [listMember, setListMember] = useState<{ name: string }[]>([]);

  const handleChangeImage: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    const listUrlImage = newFileList.map((item) => {
      return item?.response?.data?.[0] ?? item?.url;
    });
    setValue('main_images', listUrlImage);
    if (listUrlImage.length) {
      clearErrors('main_images');
    }
    setFileList(newFileList);
  };

  const handleChangeImageLogo: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setValue('logo', newFileList?.[0]?.response?.data?.[0] ?? newFileList?.[0]?.url);
    if (newFileList?.[0]?.response?.data?.[0]) {
      clearErrors('logo');
    }
    setFileLogo(newFileList);
  };

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    control,
    formState: { errors },
    getValues,
  } = useForm<ParamsUpdateGroup>({
    mode: 'onChange',
    defaultValues: {
      name: groupData?.name,
      main_images: [],
      member: '',
    },
  });

  useEffect(() => {
    register('logo', {
      required: 'Please fill out this field',
    });
    register('main_images', {
      required: 'Please fill out this field',
    });
  }, [register]);

  const onSubmit: SubmitHandler<ParamsUpdateGroup> = (params) => {};

  return (
    <>
      <div className='flex'>
        <div className='w-full'>
          <SellerHeaderUpdateCreate title='新しいグループ' showButtonRight={true} />
          <div>
            <div className='p-[34px]'>
              <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full md:w-1/2 px-3 mb-[40px]'>
                  <InputSeller
                    type='text'
                    placeholder='グループ名'
                    name='name'
                    control={control}
                    message={errors && errors.name && errors.name.message}
                    label='グループ名'
                    isRequired={true}
                    rules={{ required: { value: true, message: 'This field is required' } }}
                  />
                </div>
                <div className='w-full md:w-1/2 px-3 mb-[40px]'>
                  <AreaTag
                    placeholder='Placeholder'
                    name='member'
                    control={control}
                    message={errors && errors.member && errors.member.message}
                    label='List member'
                    isRequired={true}
                    listTagState={listMember}
                    setListTagState={setListMember}
                    setValue={setValue}
                    getValues={getValues}
                    rules={{ required: { value: true, message: 'This field is required' } }}
                  />
                </div>
                <div className='w-full md:w-1/2 px-3 mb-[17px]'>
                  <label className='block  tracking-wide font-normal pb-[8px]'>
                    <span className='text-[#FF4D4F]'>*</span>
                    <span className='text-sm leading-[22px]'>ロゴ</span>
                  </label>
                  <div>
                    <UploadImage
                      fileList={fileLogo}
                      handleChangeImage={handleChangeImageLogo}
                      number={1}
                    />
                    <ErrorMessage
                      errors={errors}
                      name={'logo'}
                      render={({ message }) => <p className='text-red-400'>{message}</p>}
                    />
                    <div className='text-black/[0.45] text-sm leading-[22px] pt-[9px]'>
                      <p>アスペクト比: 1:1</p>
                      <p>サイズ: 512px * 512px以上</p>
                      <p>画像形式: jpg,png,webp</p>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-3 mb-[17px]'>
                  <label className='block tracking-wide font-normal pb-[8px]'>
                    <span className='text-[#FF4D4F]'>*</span>
                    <span className='text-sm leading-[22px]'>メイン画像</span>
                  </label>
                  <div>
                    <div className='flex'>
                      <ul className='flex items-center'>
                        <li>
                          <UploadImage
                            fileList={fileList}
                            handleChangeImage={handleChangeImage}
                            number={5}
                          />
                          <ErrorMessage
                            errors={errors}
                            name={'main_images'}
                            render={({ message }) => <p className='text-red-400'>{message}</p>}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className='text-black/[0.45] text-sm leading-[22px] pt-[9px]'>
                      <p>アスペクト比: 1:1</p>
                      <p>サイズ: 512px * 512px以上</p>
                      <p>画像形式: jpg,png,webp</p>
                      <p>5枚まで</p>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-3 mb-[40px]'>
                  <div>
                    <InputUrlSeller
                      type='text'
                      placeholder='URL'
                      name='url'
                      domain=''
                      control={control}
                      message={errors && errors.main_images && errors.main_images.message}
                      label='URL'
                      isRequired={true}
                      rules={{ required: { value: true, message: 'This field is required' } }}
                    />
                    <div className='text-black/[0.45] text-sm leading-[22px] pt-[9px]'>
                      <p>半角英数字またはハイフン(-)3文字以上</p>
                      <p>URLは保存したら変更できませんのでご注意下さい</p>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-3 mb-[40px]'>
                  <TextAreaSeller
                    placeholder='Autosize height based on content lines'
                    name='description'
                    control={control}
                    message={errors && errors.description && errors.description.message}
                    label='説明文'
                    rows={4}
                    isRequired={true}
                    rules={{ required: { value: true, message: 'This field is required' } }}
                  />
                </div>
                <div className='w-full md:w-1/2 px-3 mb-[40px]'>
                  <button className='bg-blue-500 text-[#fff] text-sm leading-[22px] py-2 px-4 rounded'>
                    保存
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
