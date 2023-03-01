import axios from "axios";
import { GetServerSideProps, GetStaticProps } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import apiClient from "../api/apiClient";
import ButtonCommon from "../components/common/ButtonCommon";
import InputCommon from "../components/common/InputCommon";
import { useEffect } from "react";

const Dashboard = ({ data }: any) => {
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
        <span className="text-red-400">ádasd</span>
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

export const getStaticProps: GetStaticProps = async () => {
  console.log("hello");
  const result = await apiClient.post("/product/search?page=1&size=10", {});
  const { data } = result;
  console.log("data:::", data);
  return {
    props: {
      data,
    },
  };
};

export default Dashboard;
