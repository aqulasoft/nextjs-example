import React, { useState } from "react";
import Input from "./Input";

type LoginInfo = {
  name?: string;
  pass?: string;
};

const LoginForm = () => {
  const [loginData, setLoginData] = useState<LoginInfo>({});

  return (
    <div>
      <h4>login</h4>
      <Input
        onChange={(value) => {
          setLoginData({ name: value, pass: loginData.pass });
        }}
      />
      <h4>pass</h4>
      <Input
        onChange={(value) => {
          setLoginData({ name: loginData.name, pass: value });
        }}
      />
      <button
        onClick={() => {
          console.log(loginData);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
