import React, { type ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-xl font-medium shadow-md transition hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed bg-gray text-white ${className}`}
    >
      {children}
    </button>
  );
}
