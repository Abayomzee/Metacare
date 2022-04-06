import styled from "styled-components";
import { LegendDotProps } from "./Types";

export const LegendDotStyle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 0.2rem;
  background-color: ${({ type }: LegendDotProps) =>
    type === "1"
      ? "var(--color-1)"
      : type === "2"
      ? "var(--color-2)"
      : type === "3"
      ? "var(--color-3)"
      : type === "4"
      ? "var(--color-4)"
      : "var(--color-1)"};
`;
