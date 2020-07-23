import React from "react";

import logoImg from "../../assets/images/logo.png";

import { Container } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="logo" />
    </Container>
  );
};

export default Navbar;
