import { SellerInput } from "@/src/components/common/SellerInput";
import { SellerTextArea } from "@/src/components/common/SellerTextArea";
import { SellerUrlInput } from "@/src/components/common/SellerUrlInput";
import { SellerHeaderUpdateCreate } from "@/src/components/seller/common/SellerHeaderUpdateCreate";
import { UploadImage } from "@/src/components/upload/UploadImage";
import { ParamsCreateMember } from "@/src/type/group.type";
import { APP_URL } from "@/src/utils/contants";
import { ErrorMessage } from "@hookform/error-message";
import { UploadFile, UploadProps } from "antd";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GetGroupId } from "src/utils/getGroupId";
import Cookies from "universal-cookie";

export const SellerCreateMemberView = () => {
  const groupId = GetGroupId();
  const cookies = new Cookies();
  const urlGroup = cookies.get("url_group");

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChangeImage: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setValue("profile_image", newFileList?.[0]?.response?.data?.[0]);
    if (newFileList?.[0]?.response?.data?.[0]) {
      clearErrors("profile_image");
    }
    setFileList(newFileList);
  };

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<ParamsCreateMember>({
    mode: "onChange",
    defaultValues: {
      profile_image: [],
    },
  });

  useEffect(() => {
    register("profile_image", {
      required: "Please fill out this field",
    });
    register("group_id", {
      required: "Please fill out this field",
    });
    if (groupId) {
      setValue("group_id", groupId);
    }
  }, [register, groupId]);
  const onSubmit: SubmitHandler<ParamsCreateMember> = (params) => {};

  return (
    <>
      <div className="flex font-['Roboto']">
        <div className="w-full">
          <SellerHeaderUpdateCreate title="メンバーを追加" />
          <div>
            <div className="p-[34px]">
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <label className="block  tracking-wide font-normal pb-[8px]">
                    <span className="text-[#FF4D4F]">*</span>
                    <span className="text-sm leading-[22px]">氏名</span>
                  </label>
                  <SellerInput
                    type="text"
                    placeholder="山田　太郎"
                    register={register}
                    name="name"
                    option={{
                      required: "Please fill out this field",
                    }}
                    errors={errors}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <label className="block  tracking-wide font-normal pb-[8px]">
                    <span className="text-[#FF4D4F]">*</span>
                    <span className="text-sm leading-[22px]">メンバーID</span>
                  </label>
                  <div>
                    <SellerUrlInput
                      type={"text"}
                      url={`${APP_URL}/${urlGroup?.[groupId]}/`}
                      placeholder={"yamadataro"}
                      register={register}
                      name={"url"}
                      option={{
                        required: "Please fill out this field",
                      }}
                      errors={errors}
                    />
                    <div className="text-black/[0.45] text-sm leading-[22px] pt-[9px]">
                      <p>半角英数字またはハイフン(-)3文字以上</p>
                      <p>・メンバーIDは保存したら変更できません</p>
                      <p>・メンバーIDはグループ内で重複できません</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[17px]">
                  <label
                    className="block  tracking-wide font-normal pb-[8px]"
                    htmlFor="grid-first-name"
                  >
                    <span className="text-[#FF4D4F]">*</span>
                    <span className="text-sm leading-[22px]">
                      プロフィール画像
                    </span>
                  </label>
                  <div>
                    <UploadImage
                      fileList={fileList}
                      handleChangeImage={handleChangeImage}
                      number={1}
                    />
                    <ErrorMessage
                      errors={errors}
                      name={"profile_image"}
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
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <label className="block tracking-wide font-normal pb-[8px]">
                    <span className="text-[#FF4D4F]">*</span>
                    <span className="text-sm leading-[22px]">
                      プロフィール文
                    </span>
                  </label>
                  <SellerTextArea
                    placeholder={"Autosize height based on content lines"}
                    register={register}
                    name={"profile_description"}
                    option={{
                      required: "Please fill out this field",
                    }}
                    errors={errors}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <button className="bg-blue-500 text-[#fff] text-sm leading-[22px] py-[4px] px-[15px] rounded-sm">
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
