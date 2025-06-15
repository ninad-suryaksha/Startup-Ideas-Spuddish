
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
        bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg
        ${hover ? 'hover:shadow-xl hover:bg-white/95 hover:border-gray-300' : ''}
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
