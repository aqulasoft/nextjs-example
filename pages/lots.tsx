import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useLayoutEffect, useState } from "react";
import CardLot from "../src/components/CardLot";
import CreateLotForm from "../src/components/CreateLotForm";
import { base64Img } from "../src/consts";
import { Lot } from "../src/types/types";

const Container = styled.div`
  & > * {
    margin-bottom: 20px;
  }
`;

const mockGetLots = () =>
  new Promise<ReadonlyArray<Lot>>((resolve, reject) => {
    resolve([
      {
        name: "Сапог левый",
        price: 100,
        step: 10,
        image: base64Img,
      },
      { name: "Сапог центральный", price: 10, step: 1, image: base64Img },
      { name: "Сапог правый", price: 200, step: 20, image: base64Img },
    ]);
  });

const Lots: NextPage = () => {
  const [lots, setLots] = useState<ReadonlyArray<Lot>>([]);

  useLayoutEffect(() => {
    mockGetLots().then((data) => {
      setLots(data);
    });
  }, []);

  return (
    <Container>
      {lots.map((lot) => (
        <CardLot key={lot.name} data={lot} />
      ))}
      <CreateLotForm />
    </Container>
  );
};

export default Lots;
