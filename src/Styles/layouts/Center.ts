import styled from "styled-components";
import { clearfix } from "../Abstract/Mixins";
import {
  dashboardCenterWidth,
  maxRowWidth,
  maxRowWidthExtended,
} from "../Abstract/Variables";
import { responsive } from "../Abstract/Breakpoints";

export const Center = styled.section`
  ${clearfix};
  max-width: ${maxRowWidth};
  margin-inline: auto;

  /* Media Queries */
  ${responsive(
    "xlg",
    `
    padding-left: 2rem;
    padding-right: 2rem;
  `
  )};
`;

export const DashboardCenter = styled(Center)`
  max-width: ${dashboardCenterWidth};
`;

export const CenterExtended = styled(Center)`
  max-width: ${maxRowWidthExtended};
`;
