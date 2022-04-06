import styled from "styled-components";
import { FlexRowJcBetweenAiCenter } from "Styles/Abstract/Mixins";

export const Wrapper = styled.nav`
  border-bottom: 1px solid var(--color-10);
  position: sticky;
  top: 0;
  background-color: var(--color-white);
  z-index: 2;
`;
export const TopNavStyle = styled.nav`
  ${FlexRowJcBetweenAiCenter};
  gap: 2rem;
  width: 100%;
  padding: 1.3rem 0;
`;
