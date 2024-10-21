import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-t from-sky-300 to-blue-400">
      {children}
    </div>
  );
};

export default AuthLayout;
