import styled from "styled-components";
import { motion } from "framer-motion";

export const SidenavDropdownWrapper = styled(motion.div)`
  padding: 1.2rem 1rem;

  .dropdown-item {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: var(--color-8);
    padding: 0.7rem 2.5rem;
    border-left: 1px solid transparent;
    transition: 0.4s;

    &:hover {
      color: var(--color-9);
      border-color: var(--color-10);
    }
  }
`;

export const DropdownItem = styled(motion.a)`
  display: inline-block;
  cursor: pointer;
`;

//  CustomerSatisfactionTab.tsx