import { useRouter } from "next/router";
import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonCommon from "../components/common/ButtonCommon";
import InputCommon from "../components/common/InputCommon";
import { IFormLogin } from "../type/login.type";

const LoginView = () => {
    const router = useRouter()
  const {
    register,
    formState: { errors },
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
        <InputCommon
          placeholder="Username"
          {...register("username", {
            required: { value: true, message: "This field is required" },
          })}
          name="username"
          message={errors && errors.username && errors.username?.message}
        />
        <InputCommon
          placeholder="Password"
          type="password"
          {...register("password", {
            required: { value: true, message: "This field is required" },
          })}
          name="password"
          message={errors && errors.password && errors.password?.message}
        />
        <ButtonCommon type="submit">Login</ButtonCommon>
      </form>
    </div>
  );
};

export default LoginView;
