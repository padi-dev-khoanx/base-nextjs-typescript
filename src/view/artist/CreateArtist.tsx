import InputSeller from "@/src/components/common/seller/InputSeller";
import InputUrlSeller from "@/src/components/common/seller/InputUrlSeller";
import TextAreaSeller from "@/src/components/common/seller/TextAreaSeller";
import { SellerHeaderUpdateCreate } from "@/src/components/seller/common/SellerHeaderUpdateCreate";
import { UploadImage } from "@/src/components/upload/UploadImage";
import { ParamsCreateGroup } from "@/src/type/artist.type";
import { ErrorMessage } from "@hookform/error-message";
import { UploadProps } from "antd";
import { UploadFile } from "antd/lib/upload";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

export const CreateArtist = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileLogo, setFileLogo] = useState<UploadFile[]>([]);
  const handleChangeImage: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    const listUrlImage = newFileList.map((item) => {
      return item?.response?.data?.[0];
    });
    setValue("main_images", listUrlImage);
    if (listUrlImage.length) {
      clearErrors("main_images");
    }
    setFileList(newFileList);
  };

  const handleChangeImageLogo: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setValue("logo", newFileList?.[0]?.response?.data?.[0]);
    if (newFileList?.[0]?.response?.data?.[0]) {
      clearErrors("logo");
    }
    setFileLogo(newFileList);
  };

  const {
    handleSubmit,
    setValue,
    clearErrors,
    control,
    formState: { errors },
  } = useForm<ParamsCreateGroup>({
    mode: "onChange",
    defaultValues: {
      logo: "",
      main_images: [],
    },
  });

  // useEffect(() => {
  //   register("logo", {
  //     required: "Please fill out this field",
  //   });
  //   register("main_images", {
  //     required: "Please fill out this field",
  //   });
  // }, [register]);
  const onSubmit: SubmitHandler<ParamsCreateGroup> = (params) => {};

  return (
    <>
      <div className="flex">
        <div className="w-full">
          <SellerHeaderUpdateCreate title="新しいグループ" />
          <div>
            <div className="p-[34px]">
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <label className="block  tracking-wide font-normal pb-[8px]">
                    <span className="text-[#FF4D4F]">*</span>
                    <span className="text-sm leading-[22px]">グループ名</span>
                  </label>
                  <InputSeller
                    type="text"
                    placeholder="グループ名"
                    name="name"
                    control={control}
                    message={errors && errors.name && errors.name.message}
                    label=""
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[17px]">
                  <label className="block  tracking-wide font-normal pb-[8px]">
                    <span className="text-[#FF4D4F]">*</span>
                    <span className="text-sm leading-[22px]">ロゴ</span>
                  </label>
                  <div>
                    <UploadImage
                      fileList={fileLogo}
                      handleChangeImage={handleChangeImageLogo}
                      number={1}
                    />
                    <ErrorMessage
                      errors={errors}
                      name={"logo"}
                      render={({ message }) => (
                        <p className="text-red-400">{message}</p>
                      )}
                    />
                    <div className="text-black/[0.45] text-sm leading-[22px] pt-[9px]">
                      <p>アスペクト比: 1:1</p>
                      <p>サイズ: 512px * 512px以上</p>
                      <p>画像形式: jpg,png,webp</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[17px]">
                  <label className="block  tracking-wide font-normal pb-[8px]">
                    <span className="text-[#FF4D4F]">*</span>
                    <span className="text-sm leading-[22px]">メイン画像</span>
                  </label>
                  <div>
                    <div className="flex">
                      <ul className="flex items-center">
                        <li>
                          <UploadImage
                            fileList={fileList}
                            handleChangeImage={handleChangeImage}
                            number={5}
                          />
                          <ErrorMessage
                            errors={errors}
                            name={"main_images"}
                            render={({ message }) => (
                              <p className="text-red-400">{message}</p>
                            )}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="text-black/[0.45] text-sm leading-[22px] pt-[9px]">
                      <p>アスペクト比: 1:1</p>
                      <p>サイズ: 512px * 512px以上</p>
                      <p>画像形式: jpg,png,webp</p>
                      <p>5枚まで</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <label className="block  tracking-wide font-normal pb-[8px]">
                    <span className="text-[#FF4D4F]">*</span>
                    <span className="text-sm leading-[22px]">URL</span>
                  </label>
                  <div>
                    <InputUrlSeller
                      type="text"
                      placeholder="URL"
                      name="url"
                      domain=""
                      control={control}
                      message={errors && errors.url && errors.url.message}
                      label=""
                    />
                    <div className="text-black/[0.45] text-sm leading-[22px] pt-[9px]">
                      <p>半角英数字またはハイフン(-)3文字以上</p>
                      <p>URLは保存したら変更できませんのでご注意下さい</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <label className="block  tracking-wide font-normal pb-[8px]">
                    <span className="text-[#FF4D4F]">*</span>
                    <span className="text-sm leading-[22px]">説明文</span>
                  </label>
                  <TextAreaSeller
                    placeholder={"Autosize height based on content lines"}
                    name={"description"}
                    control={control}
                    message={
                      errors && errors.description && errors.description.message
                    }
                    label=""
                    rows={4}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <button className="bg-blue-500 text-[#fff] text-sm leading-[22px] py-2 px-4 rounded">
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
