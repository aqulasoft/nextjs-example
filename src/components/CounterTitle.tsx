import React, { useEffect, useMemo } from "react";

type Props = {
  count: number;
};

export const CounterTitle = ({ count }: Props) => {
  useEffect(() => {
    console.log("COUNT IS: ", count);

    // return () => {
    //   second;
    // };
  }, [count]);


  useEffect(() => {
    console.log("INIT");
  }, []);

  return <div>{count}</div>;
};
