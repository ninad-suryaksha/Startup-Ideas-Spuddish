
import { ReactNode } from "react";

interface MetricCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  color?: string;
}

export const MetricCard = ({ icon, label, value, color = "text-white" }: MetricCardProps) => {
  return (
    <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-green-100 text-sm">{label}</span>
      </div>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
    </div>
  );
};
