import type { NextPage } from "next";
import styled from "@emotion/styled";
import RedButton from "../src/components/RedButton";
import CheckBox from "../src/components/CheckBox";
import ButtonColumn from "../src/components/ButtonColumn";

const RedDiv = styled.div`
  color: red;
  font-size: 25px;
`;

const Container = styled.div`
  background: grey;
  /* 
  font-size: 20px;

  span {
    color: red;
    background: black;
  }

  & > div {
    background: blue;
  }

  & > div > div {
    background: green;
  } */
`;

const GreenButton = styled(RedButton)`
  background: green;
  font-size: 20px;
`;

const Home: NextPage = () => {
  return (
    <div>
      {/* <div>
        <div>1</div>
        <div>1</div>
        <RedDiv>2</RedDiv>

        <div>1</div>
      </div> */}
      <div>
        <Container>
          {/* <span>1</span>
          <span>2</span>
          <span>
            <span>
              <span>3</span>
              <span>4</span>
              <div>5</div>
            </span>
            <span>5</span>
          </span>

          <div>6</div>

          <div>
            <div>7</div>
            <div>8</div>
            <RedDiv>9</RedDiv>

            <div>10</div>
          </div> */}
{/* 
          <RedButton />
          <RedButton title="Button 1" />
          <RedButton title="Button 2" />
          <GreenButton title="Green Button" />
          <CheckBox color="red" title="Люблю Маи" />
          <CheckBox /> */}

          {/* <ButtonColumn /> */}
        </Container>
      </div>

      <ButtonColumn />
    </div>
  );
};

export default Home;
