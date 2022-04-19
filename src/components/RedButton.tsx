import styled from "@emotion/styled";
import React, { useState } from "react";
import { CounterTitle } from "./CounterTitle";

type Props = {
  className?: string;
  title?: string;
};

const Button = styled.button`
  background: red;
`;

const RedButton = ({ className, title }: Props) => {
  const [counter, setCounter] = useState<number>(0);

  const clickHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <CounterTitle count={counter} />
      <Button className={className} onClick={clickHandler}>
        {title || "кнопка"}
      </Button>
    </div>
  );
};

export default RedButton;
