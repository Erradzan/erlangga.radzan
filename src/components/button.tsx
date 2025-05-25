import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};