import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogo, Text } from "./styles";

function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImage alt="логотип" />
      <Text>Котокафе</Text>
    </StyledLogo>
  );
}

export default Logo;
