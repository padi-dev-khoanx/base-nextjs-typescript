import { useRouter } from "next/router";
import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonCommon from "../components/common/ButtonCommon";
import InputSeller from "../components/seller/input/InputSeller";
import { IFormLogin } from "../type/login.type";

const LoginView = () => {
  const router = useRouter();
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IFormLogin>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });
  const handleLogin: SubmitHandler<IFormLogin> = (value) => {
    console.log("value:::", value);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col space-y-4"
      >
        <InputSeller
          name="username"
          control={control}
          rules={{
            required: { value: true, message: "This field is required" },
          }}
          message={errors && errors.username && errors.username.message}
          placeholder="Username"
        />
        <InputSeller
          name="password"
          control={control}
          rules={{
            required: { value: true, message: "This field is required" },
          }}
          message={errors && errors.password && errors.password.message}
          type="password"
          placeholder="Password"
        />
        <ButtonCommon type="submit">Login</ButtonCommon>
      </form>
    </div>
  );
};

export default LoginView;
