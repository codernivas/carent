"use client";

import React from "react";

interface ButtonProps {
  label: string; // The text displayed on the button
  onClick?: () => void; // Function to handle button click
  type?: "button" | "submit" | "reset"; // Button type
  className?: string; // Custom Tailwind classes
  disabled?: boolean; // Disabled state
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
