
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
        backdrop-blur-xl bg-white/10 border-white/20 rounded-3xl
        ${hover ? 'hover:bg-white/15 hover:scale-105 hover:shadow-2xl' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        transition-all duration-300
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </Card>
  );
};
