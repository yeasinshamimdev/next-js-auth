"use client";

import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginPage = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const onClick = () => {
    console.log("Login btn clicked");
  };

  return <span className="cursor-pointer">{children}</span>;
};

export default LoginPage;
