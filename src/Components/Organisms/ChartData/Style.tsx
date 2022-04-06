import styled from "styled-components";
import {
  FlexRow,
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
} from "Styles/Abstract/Mixins";

export const ChartDataStyle = styled.div`
  background: var(--color-white);
  border: 1px solid var(--color-10);
  border-radius: 1rem;
  ${FlexRow};
  margin-bottom: 2.4rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ChartDataAsides = styled.div`
  padding: 2.4rem;
  background: var(--color-white);
  overflow: hidden;

  &.left {
    flex-grow: 1;
    border-right: 1px solid var(--color-10);
    border-radius: 1rem 0 0 1rem;
  }
  &.right {
    flex-basis: 25rem;
    border-radius: 0 1rem 1rem 0;
  }
`;

export const ChartDataTop = styled.div`
  ${FlexRowJcBetweenAiCenter};
  gap: 1.6rem;
  margin-bottom: 3.5rem;

  .right {
    ${FlexRowAiCenter}
    gap: .8rem;
  }
`;

export const ChartDataContainer = styled.div`
  height: 20.4rem;
  & > * {
    height: 100%;
  }
`;
