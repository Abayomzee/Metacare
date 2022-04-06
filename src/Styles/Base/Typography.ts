import { css } from "styled-components";

export const Typography = css`
  body {
    font-family: "Gelion", sans-serif;
    font-size: 1.6rem;
    line-height: 1.7rem;
    font-weight: 500;
  }

  /* Headings */
  .heading {
    &-1 {
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--color-8);
    }
    &-2 {
      font-weight: 600;
      font-size: 2rem;
      color: var(--color-9);
    }
    &-3 {
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--color-9);
    }
    &-4 {
      font-weight: 600;
      font-size: 2.4rem;
      color: var(--color-9);
    }
  }

  /* Paragraphs */
  .paragraph {
    &-1 {
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--color-8);
    }
  }
`;
