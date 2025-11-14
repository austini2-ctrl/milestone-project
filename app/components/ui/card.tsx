import type { ReactNode } from "react";
import type { ReactFormState } from "react-dom/client";
import React from "react-router.config"
interface CardProps {
  children: ReactNode
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl shadow-lg bg-white ${className}`}>{children}</div>
  );
}

export function CardHeader({ children, className = "" }: CardProps) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: CardProps) {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: CardProps) {
  return <div className={`p-4 border-t ${className}`}>{children}</div>;
}
