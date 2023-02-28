import { SellerInput } from "@/src/components/common/SellerInput";
import { SellerNumberInput } from "@/src/components/common/SellerNumberInput";
import { SellerTextArea } from "@/src/components/common/SellerTextArea";
import { SellerHeaderUpdateCreate } from "@/src/components/seller/common/SellerHeaderUpdateCreate";
import { SellerTitle } from "@/src/components/seller/common/SellerTitle";
import { UploadImage } from "@/src/components/upload/UploadImage";
import { ParamsUpdatePack } from "@/src/type/group.type";
import { GetGroupId } from "@/src/utils/getGroupId";
import { ErrorMessage } from "@hookform/error-message";
import { DatePicker, Select, UploadFile, UploadProps } from "antd";
import dayjs from "dayjs";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const SellerUpdatePackView = () => {
  const router = useRouter();
  const groupId = GetGroupId();

  const packData: any = {};
  const dataSeries: any = {};
  const packSeries = packData?.packSeries?.map(
    (series: { series_id: number }) => {
      return { value: series.series_id };
    }
  );

  const optionSeries = dataSeries?.data?.items?.map(
    (item: { name: string; id: number }) => {
      return { label: item.name, value: item.id };
    }
  );

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChangeImage: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setValue(
      "image",
      newFileList?.[0]?.response?.data?.[0] ?? newFileList?.[0]?.url
    );
    if (newFileList?.[0]?.response?.data?.[0]) {
      clearErrors("image");
    }
    setFileList(newFileList);
  };

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm<ParamsUpdatePack>({
    mode: "onChange",
    defaultValues: {
      name: packData?.name,
      series_id: [],
    },
  });

  const validateEndTime = (v: string | null): boolean => {
    if (v) {
      const startDate = new Date(getValues("start_datetime"));
      const endDate = v ? new Date(v) : "";

      return endDate > startDate;
    }
    return true;
  };

  useEffect(() => {
    register("image", {
      required: "Please fill out this field",
    });
    register("start_datetime", {
      required: "Please fill out this field",
    });
    register("end_datetime", {
      validate: {
        maxDate: (v) =>
          validateEndTime(v) ||
          "The end date cannot be less than the start date",
      },
    });
    register("series_id", {
      validate: {
        length: (v) => {
          return v.length > 0 || "Please fill out this field";
        },
      },
    });
  }, [register]);

  useEffect(() => {
    if (packData) {
      setValue("pack_id", packData.id);
      setValue("group_id", packData.group_id);
      setValue("name", packData.name);
      setValue("image", packData.image);
      setValue("price_jpy", packData.price.jpy);
      setValue("price_eth", packData.price.eth);
      setValue("amount", packData.amount);
      setValue("start_datetime", packData.start_datetime);
      setValue("end_datetime", packData.end_datetime);
      setValue("number_card", packData.number_card);
      setValue("description", packData.description);
      setValue("max_can_buy", packData.max_can_buy);
      setValue(
        "series_id",
        packData.packSeries.map((item: { series_id: number }) => {
          return item.series_id;
        })
      );

      setFileList([
        {
          uid: "1",
          name: "image.png",
          status: "done",
          url: packData.image,
        },
      ]);
    }
  }, [packData]);

  const onSubmit: SubmitHandler<ParamsUpdatePack> = (params) => {
    params.price_eth = Number(params.price_eth);
    params.price_jpy = Number(params.price_jpy);
    params.number_card = Number(params.number_card);
    params.max_can_buy = Number(params.max_can_buy);
    params.amount = Number(params.amount);
    params.end_datetime =
      params.end_datetime === "" ? null : params.end_datetime;
  };

  const handleChangeDatetime = (
    name: "start_datetime" | "end_datetime",
    value: dayjs.Dayjs | null
  ) => {
    setValue(name, value?.format("YYYY-MM-DD HH:mm:ss") ?? "");
    if (value) {
      clearErrors(name);
    }
  };

  const handleChangeSeries = (name: "series_id", value: never[]) => {
    setValue(name, value);
    if (value.length) {
      clearErrors(name);
    }
  };

  return (
    <>
      <div className="flex font-['Roboto']">
        <div className="w-full">
          <SellerHeaderUpdateCreate title={packData?.name} />
          <div>
            <div className="px-[34px] py-[32px]">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <SellerTitle title={"パック名"} />
                  <SellerInput
                    type="text"
                    placeholder="パック名"
                    register={register}
                    name="name"
                    option={{
                      required: "Please fill out this field",
                    }}
                    errors={errors}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[17px]">
                  <SellerTitle title={"画像"} />
                  <div>
                    <UploadImage
                      fileList={fileList}
                      handleChangeImage={handleChangeImage}
                      number={1}
                      minHeight={720}
                      minWidth={720}
                    />
                    <ErrorMessage
                      errors={errors}
                      name={"image"}
                      render={({ message }) => (
                        <p className="text-red-400">{message}</p>
                      )}
                    />
                    <div className="text-black/[0.45] text-sm leading-[22px] pt-[9px]">
                      <p>アスペクト比: 1:1</p>
                      <p>サイズ: 720px * 720px</p>
                      <p>画像形式: jpg,png,webp</p>
                      <p>1つまで</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <SellerTitle title={"説明文"} />
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
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <SellerTitle title={"価格"} />
                  <SellerNumberInput
                    type="number"
                    placeholder={"0"}
                    unit={"円"}
                    min={0}
                    step={"any"}
                    register={register}
                    name="price_jpy"
                    option={{
                      required: "Please fill out this field",
                    }}
                    errors={errors}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <SellerTitle title={"価格"} />

                  <SellerNumberInput
                    type="number"
                    placeholder={"0"}
                    unit={"ETH"}
                    min={0}
                    step={"any"}
                    register={register}
                    name="price_eth"
                    option={{
                      required: "Please fill out this field",
                    }}
                    errors={errors}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <SellerTitle title={"販売数量"} />

                  <SellerNumberInput
                    type="number"
                    placeholder={"1"}
                    unit={"個"}
                    min={1}
                    step={"number"}
                    register={register}
                    name="amount"
                    option={{
                      required: "Please fill out this field",
                    }}
                    errors={errors}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <SellerTitle title={"1人あたり上限販売個数"} />

                  <SellerNumberInput
                    type="number"
                    placeholder={"1"}
                    unit={"個"}
                    min={1}
                    step={"number"}
                    register={register}
                    name="max_can_buy"
                    option={{
                      required: "Please fill out this field",
                    }}
                    errors={errors}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <SellerTitle title={"販売開始日時"} />

                  <div>
                    {false ? (
                      <DatePicker
                        showTime
                        className="w-full"
                        format="YYYY-MM-DD HH:mm:ss"
                        defaultValue={dayjs(
                          packData?.start_datetime,
                          "YYYY-MM-DD HH:mm:ss"
                        )}
                        onChange={(value) =>
                          handleChangeDatetime("start_datetime", value)
                        }
                      />
                    ) : null}

                    <ErrorMessage
                      errors={errors}
                      name={"start_datetime"}
                      render={({ message }) => (
                        <p className="text-red-400">{message}</p>
                      )}
                    />
                    <p className="text-sm leading-[22px] text-black/[0.45]">
                      日時は日本時間で選択してください
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <SellerTitle title={"販売終了日時"} required={false} />
                  <div>
                    {false ? (
                      <DatePicker
                        showTime
                        className="w-full"
                        format="YYYY-MM-DD HH:mm:ss"
                        defaultValue={
                          packData?.end_datetime &&
                          dayjs(packData?.end_datetime, "YYYY-MM-DD HH:mm:ss")
                        }
                        onChange={(value) =>
                          handleChangeDatetime("end_datetime", value)
                        }
                      />
                    ) : null}
                    <ErrorMessage
                      errors={errors}
                      name={"end_datetime"}
                      render={({ message }) => (
                        <p className="text-red-400">{message}</p>
                      )}
                    />
                    <p className="text-sm leading-[22px] text-black/[0.45]">
                      日時は日本時間で選択してください
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <SellerTitle title={"シリーズ"} required={true} />
                  {false ? (
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: "100%" }}
                      placeholder="Please select"
                      defaultValue={packSeries}
                      options={optionSeries}
                      onChange={(value) =>
                        handleChangeSeries("series_id", value)
                      }
                    />
                  ) : null}
                  <ErrorMessage
                    errors={errors}
                    name={"series_id"}
                    render={({ message }) => (
                      <p className="text-red-400">{message}</p>
                    )}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <SellerTitle title={"含まれるカード枚数"} />
                  <SellerNumberInput
                    type="number"
                    placeholder={"1"}
                    unit={"枚"}
                    min={1}
                    step={"number"}
                    register={register}
                    name="number_card"
                    option={{
                      required: "Please fill out this field",
                    }}
                    errors={errors}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-[40px]">
                  <button className="bg-blue-500 text-[#fff] text-sm leading-[22px] py-2 px-4 rounded-sm">
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
