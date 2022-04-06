import React from "react";
import Button from "./Index";

interface Props {
  text?: any;
  className?: string;
  icon: JSX.Element;
}
const IconButton: React.FC<Props> = (props) => {
  const { text, className, icon } = props;
  return (
    <Button className={`${className} btn-icon`}>
      {text}
      {icon}
    </Button>
  );
};

export default IconButton;
