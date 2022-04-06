import styled from "styled-components";
import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import { Button } from "Styles/Components/Button";

export const ButtonStyle = styled(Button)`
  &.btn {
    /* Button type */
    &-good {
      background-color: var(--color-7);
      color: var(--color-white);
      border-radius: 0.8rem;
      font-size: 1.6rem;
    }
    &-has-divider {
      ${FlexRowAiCenter};
      position: relative;
      &::before {
        position: absolute;
        content: "";
        width: 1px;
        height: calc(100% - 1.4rem);
        background-color: var(--color-10);
        left: -1.6rem;
      }
    }

    &-icon {
      ${FlexRowAiCenter};
      gap: 2rem;
      font-weight: 400;
      font-size: 1.4rem;
      border: 1px solid var(--color-11);
      border-radius: 0.8rem;

      path {
        fill: var(--color-9);
      }
    }
    /* Button size */
    &-md {
      padding: 1.15rem 3rem;
    }
    &-sm {
      padding: 1.2rem 2.4454rem;
    }
  }
`;
