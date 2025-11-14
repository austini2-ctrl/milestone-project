import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full mb-4">
        {label && <label className="mb-1 text-gray-700 font-medium">{label}</label>}
        <input
          ref={ref}
          className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          {...props}
        />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
