import { motion } from "framer-motion";
import styled from "styled-components";

export const TabHeaderWrapper = styled.section`
  border-bottom: 1px solid var(--color-10);
  padding-top: 1.6rem;

  position: sticky;
  top: 8.1rem;
  background-color: var(--color-white);
  z-index: 2;
`;

export const TabBodyWrapper = styled(motion.section)`
  padding-bottom: 7rem;
`;
