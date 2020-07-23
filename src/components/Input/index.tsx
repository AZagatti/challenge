import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<Props> = ({ name, label, ...rest }) => {
  return (
    <Container htmlFor={name}>
      <p>{label}</p>
      <input name={name} {...rest} />
    </Container>
  );
};

export default Input;
