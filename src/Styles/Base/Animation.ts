// import { keyframes } from "styled-components";

// Keyframes

// Framer animations
export const animateDropdown = {
  variants: {
    visible: {
      y: 0,
      transition: {
        // duration: .2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      y: 50,
      transition: {
        // duration: .2,
        when: "afterChildren",
      },
    },
  },

  items: {
    visible: {
      opacity: 1,
      // y: 0,
      transition: {
        // duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      // y: 30,
      transition: {
        // duration: 1,
      },
    },
  },
};
