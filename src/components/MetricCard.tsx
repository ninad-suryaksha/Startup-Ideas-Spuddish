
import { ReactNode } from "react";

interface MetricCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  color?: string;
}

export const MetricCard = ({ icon, label, value, color = "text-white" }: MetricCardProps) => {
  return (
    <div className="glass-card p-6 hover-lift">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-white/80">
          {icon}
        </div>
        <span className="text-white/70 text-sm font-medium font-body tracking-wide">{label}</span>
      </div>
      <div className={`text-2xl font-display font-semibold ${color}`}>{value}</div>
    </div>
  );
};
