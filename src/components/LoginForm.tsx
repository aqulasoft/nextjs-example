import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useStore } from "../stores/storeContext";

type LoginInfo = {
  name?: string;
  pass?: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  & > * {
    margin-bottom: 10px;
  }
`;

const SubmitButton = styled(Button)``;

const LoginForm = () => {
  const [loginData, setLoginData] = useState<LoginInfo>({});

  const { userStore } = useStore();

  return (
    <Container>
      <TextField
        label="login"
        variant="filled"
        onChange={(e) => {
          setLoginData({ name: e.target.value, pass: loginData.pass });
        }}
      />

      <TextField
        label="password"
        variant="filled"
        onChange={(e) => {
          setLoginData({ name: loginData.name, pass: e.target.value });
        }}
      />
      <SubmitButton
        variant="contained"
        onClick={() => {
          if (loginData.pass && loginData.name) {
            userStore.signup(loginData.name, loginData.pass);
          }
        }}
      >
        Login
      </SubmitButton>
    </Container>
  );
};

export default LoginForm;
