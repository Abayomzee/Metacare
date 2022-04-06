import styled from "styled-components";

export const SideNavStyle = styled.main`
  flex-basis: 26.2rem;
  width: 26.2rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid var(--color-10);
  overflow: hidden;
  overflow-y: auto;

  padding: 2.1rem 2.2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SidenavMenuWrapper = styled.main`
  margin-top: 3rem;
`;
