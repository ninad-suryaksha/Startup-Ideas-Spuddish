
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
  const baseClasses = "font-medium font-body px-6 py-3 h-auto transition-all duration-300";
  
  if (variant === "ghost") {
    return (
      <Button
        variant="ghost"
        onClick={onClick}
        className={`
          ${baseClasses}
          text-white/90 hover:text-white hover:bg-white/20
          border border-white/30 hover:border-white/50
          ${className}
        `}
      >
        {children}
      </Button>
    );
  }
  
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={`
        ${baseClasses}
        bg-white/20 text-white border border-white/30
        hover:bg-white/30 hover:border-white/50
        backdrop-blur-sm
        ${className}
      `}
    >
      {children}
    </Button>
  );
};
