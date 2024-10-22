"use client";

import * as z from "zod";
import React, { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import FormSuccess from "../form-success";
import FormError from "../form-error";
import { login } from "@/actions/login";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    startTransition(() => {
      login(values);
    });
  }

  return (
    <div>
      <Card className="w-96">
        <CardHeader>
          <h1
            className={"text-6xl font-semibold text-slate-400 drop-shadow-md"}
          >
            🔐 Auth
          </h1>
          <p className="text-slate-400 text-lg text-center">
            Welcome back to login
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your email"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="*******"
                        {...field}
                        type="password"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormError message="" />
              <FormSuccess message="" />
              <Button
                type="submit"
                variant={"outline"}
                className="w-full"
                disabled={isPending}
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="border-t-2 pt-4 justify-center">
          <Button variant={"destructive"} className="bg-orange-400"></Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
