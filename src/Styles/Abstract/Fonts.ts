import { css } from "styled-components";
import GelionMedium from "Utils/Assets/Fonts/GelionMedium.woff";
import GelionThin from "Utils/Assets/Fonts/GelionThin.woff";
import GelionSemiBold from "Utils/Assets/Fonts/GelionSemiBold.woff";
import GelionRegular from "Utils/Assets/Fonts/GelionRegular.woff";
import GelionLight from "Utils/Assets/Fonts/GelionLight.woff";
import GelionBold from "Utils/Assets/Fonts/GelionBold.woff";
import GelionBlack from "Utils/Assets/Fonts/GelionBlack.woff";

export const Fonts = css`
  @font-face {
    font-family: "Gelion";
    font-style: normal;
    font-weight: normal;
    src: url(${GelionRegular}) format("woff");
  }

  @font-face {
    font-family: "Gelion";
    font-style: normal;
    font-weight: normal;
    src: url(${GelionLight}) format("woff");
  }

  @font-face {
    font-family: "Gelion";
    font-style: normal;
    font-weight: normal;
    src: url(${GelionSemiBold}) format("woff");
  }

  @font-face {
    font-family: "Gelion";
    font-style: normal;
    font-weight: normal;
    src: url(${GelionBlack}) format("woff");
  }

  @font-face {
    font-family: "Gelion";
    font-style: normal;
    font-weight: 400;
    src: url(${GelionThin}) format("woff");
  }

  @font-face {
    font-family: "Gelion";
    font-style: normal;
    font-weight: 400;
    src: url(${GelionMedium}) format("woff");
  }

  @font-face {
    font-family: "Gelion";
    font-style: normal;
    font-weight: 600;
    src: url(${GelionBold}) format("woff");
  }
`;
