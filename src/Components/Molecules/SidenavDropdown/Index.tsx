
import React from "react";
import { animateDropdown } from "Styles/Base/Animation";
import { SidenavDropdownWrapper, DropdownItem } from "./Style";

interface Props {
  open: Boolean;
  items: string[];
}
const SidenavDropdown: React.FC<Props> = (props) => {
  const { open, items } = props;
  return (
    <SidenavDropdownWrapper
      variants={animateDropdown.variants}
      initial={"hidden"}
      animate={open ? "visible" : "hidden"}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, delay: 0 }}
    >
      {items.map((item, i) => (
        <DropdownItem
          key={i}
          custom={i % 20}
          variants={animateDropdown.items}
          className="dropdown-item"
        >
          {item}
        </DropdownItem>
      ))}
    </SidenavDropdownWrapper>
  );
};

export default SidenavDropdown;
