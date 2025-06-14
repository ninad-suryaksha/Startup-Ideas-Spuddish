
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export const GlassCard = ({ children, className = "", onClick, hover = true }: GlassCardProps) => {
  return (
    <Card
      className={`
        glass-card
        ${hover ? 'hover-lift hover:bg-white/[0.06] hover:border-white/[0.12]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </Card>
  );
};
