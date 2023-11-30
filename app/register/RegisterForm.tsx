"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Inputs from "../components/inputs/Inputs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log({ data });
  };
  return (
    <>
      <Heading title="Sign up for Blox Merch" />
      <Button
        label="Sign up with Google"
        Icon={AiOutlineGoogle}
        outline
        onClick={() => {}}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <Inputs
        id="name"
        label="Name"
        disabled={false}
        register={register}
        errors={errors}
        required
      />
      <Inputs
        id="email"
        label="Email"
        disabled={false}
        register={register}
        errors={errors}
        required
        type="email"
      />
      <Inputs
        id="password"
        label="Password"
        disabled={false}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading" : "Sign Up"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Already have an Account?{" "}
        <Link className="underline" href={"/login"}>
          Login
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
