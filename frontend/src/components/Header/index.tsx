import React from "react";

import LogoIcon from "../../assets/images/logo.png";

import { Container, LogoImage, LogoName } from "./styles";

interface Props {
  text: string;
}

const Header: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <LogoImage src={LogoIcon} />
      <LogoName>{text}</LogoName>
    </Container>
  );
};

export default Header;
