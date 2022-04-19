import styled from "@emotion/styled";
import React from "react";
import RedButton from "./RedButton";

const Container = styled.div`
  display: flex;

  /* height: 400px; */

  /* flex-direction: column; */

  /* & > button:nth-child(1) {
    flex: 0.5;
  } */

  justify-content: space-around;
  & > * {
    width: 150px;
  }
`;

const ButtonColumn = () => {
  return (
    <Container>
      <RedButton></RedButton>
      <RedButton></RedButton>
      <RedButton></RedButton>
    </Container>
  );
};

export default ButtonColumn;
