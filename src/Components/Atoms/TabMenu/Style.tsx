import styled from "styled-components";
import { TabMenuStyleProps } from "./Types";

export const TabMenuStyle = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ active }: TabMenuStyleProps) =>
    active ? "var(--color-9)" : "var(--color-8)"};
  display: inline-block;
  padding-bottom: 1.6rem;
  cursor: pointer;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${({ active }: TabMenuStyleProps) => (active ? "0.2rem" : "0")};
    background-color: var(--color-primary);
  }
`;
