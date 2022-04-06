import styled from "styled-components";
import { FlexRowAiCenter } from "Styles/Abstract/Mixins";

export const ProfileDropdownStyle = styled.div`
  ${FlexRowAiCenter};
  gap: 1.2rem;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    left: -2.4rem;
    height: calc(100% - 1.5rem);
    width: 0.1rem;
    background-color: var(--color-10);
  }
`;
