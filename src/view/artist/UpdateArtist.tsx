import { SellerInput } from "@/src/components/common/SellerInput";
import { SellerTextArea } from "@/src/components/common/SellerTextArea";
import { SellerHeaderUpdateCreate } from "@/src/components/seller/common/SellerHeaderUpdateCreate";
import { UploadImage } from "@/src/components/upload/UploadImage";
import {
  ParamsUpdateGroup
} from "@/src/type/artist.type";
import { ErrorMessage } from "@hookform/error-message";
import { UploadProps } from "antd";
import { UploadFile } from "antd/lib/upload";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const UpdateArtist = () => {
  const groupData: any = {};
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileLogo, setFileLogo] = useState<UploadFile[]>([]);

  const handleChangeImage: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    const listUrlImage = newFileList.map((item) => {
      return item?.response?.data?.[0] ?? item?.url;
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
    setValue(
      "logo",
      newFileList?.[0]?.response?.data?.[0] ?? newFileList?.[0]?.url
    );
    if (newFileList?.[0]?.response?.data?.[0]) {
      clearErrors("logo");
    }
    setFileLogo(newFileList);
  };

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm<ParamsUpdateGroup>({
    mode: "onChange",
    defaultValues: {
      name: groupData?.name,
    },
  });

  useEffect(() => {
    register("logo", {
      required: "Please fill out this field",
    });
    register("main_images", {
      required: "Please fill out this field",
    });
  }, [register]);

  const onSubmit: SubmitHandler<ParamsUpdateGroup> = (params) => {};

  const handleChangeStatusGroup = () => {};

  const handleChangePublicGroup = (value: boolean) => {};

  return (
    <>
      <div className="flex">
        <div className="w-full">
          <SellerHeaderUpdateCreate
            title={groupData?.name}
            conditionButtonRight={
              groupData?.status === "active" || groupData?.status === "locked"
            }
            showButtonRight={
              groupData?.status === "active" ||
              groupData?.status === "locked" ||
              groupData?.status === "inactive"
            }
            actionButtonRight={() => handleChangeStatusGroup()}
          />
          <div>
            <div className="p-[34px]">
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <label className="block  tracking-wide font-normal pb-[8px]">
                    <span className="text-[#FF4D4F]">*</span>
                    <span className="text-sm leading-[22px]">グループ名</span>
                  </label>
                  <SellerInput
                    type="text"
                    placeholder="グループ名"
                    {...register("name", {
                      required: "Please fill out this field",
                    })}
                    name="name"
                    errors={errors}
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
                    <div className="flex">
                      <span className="inline-flex items-center py-[4px] px-[12px] text-sm leading-[22px] bg-[#FAFAFA] rounded-l-[2px] border border-[#D9D9D9] border-r-[0]">
                        https://idolly.app/
                      </span>
                      <span className="rounded-sm rounded-l-[0px] bg-[#F5F5F5] border text-[#00000040] block flex-1 w-full text-sm border-[#D9D9D9] py-[4px] px-[12px] focus:outline-none focus:bg-white">
                        {groupData?.url}
                      </span>
                    </div>
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
                  <SellerTextArea
                    placeholder={"Autosize height based on content lines"}
                    register={register}
                    name={"description"}
                    option={{
                      required: "Please fill out this field",
                    }}
                    errors={errors}
                    textLength={getValues("description")?.length}
                  />
                </div>
                {/* {isFetchedAfterMount &&
                  ["active", "locked"].includes(groupData?.status) && (
                    <div className="w-full md:w-1/2 px-3 mb-[40px]">
                      <Switch
                        defaultChecked={groupData?.status === "locked"}
                        className="btn-switch"
                        onChange={(value) => handleChangePublicGroup(value)}
                        checkedChildren="公開"
                        unCheckedChildren="非公開"
                      />
                    </div>
                  )} */}

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
