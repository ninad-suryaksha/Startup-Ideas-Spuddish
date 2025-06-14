
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface FloatingButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "secondary" | "ghost";
}

export const FloatingButton = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "default" 
}: FloatingButtonProps) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={`
        glass-button
        text-white/90 font-medium font-body
        px-6 py-3 h-auto
        ${className}
      `}
    >
      {children}
    </Button>
  );
};
