import styled from "styled-components";
import {
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
} from "Styles/Abstract/Mixins";

export const TabHeaderStyle = styled.nav`
  ${FlexRowJcBetweenAiCenter};
  gap: 2rem;
  padding-top: 3.3rem;
  padding-bottom: 3.3rem;

  position: sticky;
  top: 13.1rem;
  background-color: var(--color-white);
  z-index: 2;

  .right {
    ${FlexRowAiCenter};
    gap: 2.4rem;
  }
`;
