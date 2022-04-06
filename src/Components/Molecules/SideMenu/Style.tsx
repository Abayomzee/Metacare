import styled from "styled-components";
import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import { SideMenuStyleProps } from "./Types";

export const SideMenuStyle = styled.button`
  ${FlexRowAiCenter};
  font-family: inherit;
  background-color: transparent;
  border: none;
  outline: none;
  gap: 1.9rem;
  width: 100%;
  cursor: pointer;
  transition: 0.4s;

  &::focus,
  &::active {
    outline: none;
  }

  .label {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ active }: SideMenuStyleProps) =>
      active ? "var(--color-primary)" : "var(--color-8)"};
  }

  path {
    transition: 0.4s;
    fill: ${({ active }: SideMenuStyleProps) =>
      active ? "var(--color-primary)" : "var(--color-8)"};
  }

  .menu-caret {
    transition: 0.4s;
  }

  .rotate-caret {
    transform: rotate(90deg);
  }
`;
