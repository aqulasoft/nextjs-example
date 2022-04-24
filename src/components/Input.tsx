import React from "react";
import styled from "@emotion/styled";

const StyledInput = styled.input``;

type Props = {
  onChange: (value: string) => void;
};

const Input = ({ onChange }: Props) => {
  return (
    <StyledInput
      onChange={(e: any) => {
        onChange(e.target.value);
      }}
    ></StyledInput>
  );
};

export default Input;
