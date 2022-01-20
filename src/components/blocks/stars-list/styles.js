import styled from "styled-components";
import { Ul, Li, Section } from "/src/styled";
import starsImage from "/src/assets/stars-image.svg";
import starsLeft from "/src/assets/stars-left.svg";
import starsRight from "/src/assets/stars-image.svg";

export const StyledStarsList = styled(Section)`
  position: relative;
  display: flex;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-image: url(${starsImage});
  background-position: left bottom;
  background-size: 449px 304px;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 36px;
    left: 0;
    width: 213px;
    height: 170px;
    content: "";
    background-image: url(${starsLeft});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 111px;
    height: 158px;
    content: "";
    background-image: url(${starsRight});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const StarList = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 44px;
`;

export const StarItem = styled(Li)`
  text-align: left;
  overflow: hidden;
`;
