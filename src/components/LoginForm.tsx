import React, { useState } from "react";
import { signup } from "../api/authApi";
import { getUserById } from "../api/mainApi";
import { useStore } from "../stores/storeContext";
import { saveSession } from "../utils/authKeyStorageService";
import Input from "./Input";

type LoginInfo = {
  name?: string;
  pass?: string;
};

const LoginForm = () => {
  const [loginData, setLoginData] = useState<LoginInfo>({});

  const { userStore } = useStore();

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
          if (loginData.pass && loginData.name) {
            userStore.signup(loginData.name, loginData.pass);
          }
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
