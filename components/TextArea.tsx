import React from "react";

interface Props {
  text: string;
  placeholder: string;
  onChange: (text: string) => void;
}

const TextArea: React.FC<Props> = ({ text, placeholder, onChange }) => {
  return (
    <textarea
      value={text}
      placeholder={placeholder}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default TextArea;
