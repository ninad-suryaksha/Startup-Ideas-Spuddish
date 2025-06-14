
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
        backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl
        hover:bg-white/20 hover:scale-105
        text-white transition-all duration-300
        ${className}
      `}
    >
      {children}
    </Button>
  );
};
