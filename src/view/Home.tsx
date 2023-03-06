import { GetStaticProps } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import apiClient from "../api/apiClient";
import ButtonCommon from "../components/common/ButtonCommon";
import InputUrlSeller from "../components/seller/input/InputUrlSeller";
import TextAreaSeller from "../components/seller/input/TextAreaSeller";

const Dashboard = ({ data }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues
  } = useForm({
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  });
  const submitForm: SubmitHandler<{ name: string }> = (value) => {
    console.log("value:::", value);
  };
  console.log("errors:::", errors);
  return (
    <div className="flex items-center flex-wrap space-x-4">
      <form onSubmit={handleSubmit(submitForm)}>
        <span className="text-red-400">ádasd</span>
        <ButtonCommon isDisable={true}>Disable</ButtonCommon>
        <ButtonCommon isLoading={true}>Loading</ButtonCommon>
        <ButtonCommon type="submit" onClick={() => console.log("hello")}>
          Normal
        </ButtonCommon>
        <InputUrlSeller
          control={control}
          name="name"
          placeholder="Input test"
          rules={{
            required: { value: true, message: "This field is required" },
          }}
          message={errors && errors.name && errors.name.message}
          domain=""
          label="Url"
          isRequired={true}
        />
      </form>
    </div>
  );
};

export default Dashboard;
