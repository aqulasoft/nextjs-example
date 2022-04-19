import React from "react";

type Props = {
  title?: string;
  color?: string;
};

const CheckBox = ({ title, color }: Props) => {
  return (
    <div>
      {title ? <span>{title}</span> : 12312}
      <input type="checkbox" />
    </div>
  );
};

export default CheckBox;
