import React from "react";

interface Props {
  onClick: () => void;
}
const Button: React.FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>Submit</button>;
};

export default Button;
