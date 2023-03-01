import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import ButtonCommon from "../components/common/ButtonCommon";
import InputCommon from "../components/common/InputCommon";
import useTrans from "../hooks/useTrans";
import { loadingState } from "../recoil/loading.recoil";

const Dashboard = () => {
  const trans = useTrans();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });
  const submitForm: SubmitHandler<{ name: string }> = (value) => {
    console.log("value:::", value);
  };
  return (
    <div className="flex items-center flex-wrap space-x-4">
      <form onSubmit={handleSubmit(submitForm)}>
        <span className="text-red-400">{trans.home.title}</span>
        <ButtonCommon isDisable={true}>Disable</ButtonCommon>
        <ButtonCommon isLoading={true}>Loading</ButtonCommon>
        <ButtonCommon type="submit" onClick={() => console.log("hello")}>
          Normal
        </ButtonCommon>
        <InputCommon
          placeholder="Custom input"
          {...register("name", {
            required: { value: true, message: "Trường này là bắt buộc" },
          })}
          name="name"
          errors={errors}
        />
      </form>
    </div>
  );
};

export default Dashboard;
