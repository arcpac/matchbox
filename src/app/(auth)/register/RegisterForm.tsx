"use client";
import React from "react";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "@/lib/schemas/registerSchema";
import { BiUser } from "react-icons/bi";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });
  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };
  return (
    <Card className="w-2/5 mx-auto p-5">
      <CardHeader className="flex flex-col items-center justify-content">
        <div className="flex flex-col gap-5 items-center justify-content">
          <div className="flex flex-row items-center gap-3">
            <BiUser size={30} />
            <h1>Register</h1>
          </div>
          <p>Welcome back to MatchBox</p>
        </div>
      </CardHeader>
      <CardBody>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              label="Name"
              variant="bordered"
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message as string}
            />
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
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as string}
            />
            <Button
              fullWidth
              color={isValid ? "primary" : "default"}
              type="submit"
              disabled={!isValid}
            >
              <span className={isValid ? "" : "text-neutral-100"}>
                Register
              </span>
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
