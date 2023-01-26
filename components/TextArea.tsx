import React from "react";

interface Props {
  text: string;
  placeholder: string;
  onChange: (text: string) => void;
}

const TextArea: React.FC<Props> = ({ text, placeholder, onChange }) => {
  return (
    <textarea
      name="comment"
      id="comment"
      className="w-full h-full px-3 py-4 text-lg text-white placeholder-gray-500 border rounded-md bg-slate-800 border-emerald-500 focus:ring-4 focus:ring-emerald-300 focus:outline-none focus:border-emerald-500"
      value={text}
      placeholder={placeholder}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default TextArea;
