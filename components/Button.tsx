import React from "react";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button
      type="submit"
      className="inline-flex items-center px-6 py-3 text-base font-bold text-center border border-transparent rounded-md shadow-sm text-slate-900 bg-gradient-to-br from-emerald-400 to-emerald-500 hover:bg-emerald-700 border-emerald-500 focus:ring-4 focus:ring-emerald-300 focus:outline-none focus:border-emerald-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
