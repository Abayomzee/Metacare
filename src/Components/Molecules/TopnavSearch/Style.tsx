import styled from "styled-components";
import { FlexRowAiCenter } from "Styles/Abstract/Mixins";

export const TopnavSearchStyle = styled.div`
  ${FlexRowAiCenter};
  background-color: var(--color-14);
  border-radius: 1rem;
  padding: 1.25rem 1.8rem;
  flex-basis: 44.1rem;

  .input-icon {
    width: 1.6rem;
    height: 1.6rem;
  }

  input {
    border: none;
    outline: none;
    flex-grow: 1;
    padding: .4rem 0;
    padding-right: 1.8rem;
    font-family: inherit;
    height: 100%;
    font-weight: 400;
    font-size: 1.6rem;

    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    background-color: transparent;
    /* identical to box height, or 181% */

    display: flex;
    align-items: center;

    /* Text/mute-text */

    color: #a3a3c2;

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
