import styled from "styled-components";
import { FlexRowAiCenter } from "Styles/Abstract/Mixins";

export const FilterInputStyle = styled.div`
  ${FlexRowAiCenter};
  background-color: var(--color-white);
  border: 1px solid var(--color-11);
  border-radius: 0.8rem;
  padding: 1.25rem 1.8rem;

  .input-icon {
    width: 1.6rem;
    height: 1.6rem;
  }

  input {
    border: none;
    outline: none;
    flex-grow: 1;
    padding-inline: 1.8rem;
    font-family: inherit;
    height: 100%;
    font-weight: 400;
    font-size: 1.6rem;

    &::placeholder {
      font-weight: 400;
      font-size: 1.6rem;
      color: var(--color-13);
    }
    &:focus,
    &:active {
      outline: none;
    }
  }
`;
