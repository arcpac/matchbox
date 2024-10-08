"use client";
import React from "react";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { GiPadlock } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });
  const onSubmit = (data: LoginSchema) => {
    console.log(errors);
    console.log(data);
  };
  console.log(isValid);
  return (
    <Card className="w-2/5 mx-auto p-5">
      <CardHeader className="flex flex-col items-center justify-content">
        <div className="flex flex-col gap-5 items-center justify-content">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1>Login</h1>
          </div>
          <p>Welcome back to MatchBox</p>
        </div>
      </CardHeader>
      <CardBody>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              label="Email"
              variant="bordered"
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as string}
            />
            <Input
              label="Password"
              variant="bordered"
              {...register("password")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as string}
            />
            <Button
              fullWidth
              color={isValid ? "primary" : "default"}
              type="submit"
              disabled={!isValid}
            >
              <span className={isValid ? "" : "text-neutral-100"}>Login</span>
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
