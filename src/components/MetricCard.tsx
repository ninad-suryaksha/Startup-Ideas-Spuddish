
import { ReactNode } from "react";

interface MetricCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  color?: string;
}

export const MetricCard = ({ icon, label, value, color = "text-gray-900" }: MetricCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-gray-600">
          {icon}
        </div>
        <span className="text-gray-600 text-sm font-medium font-body tracking-wide">{label}</span>
      </div>
      <div className={`text-2xl font-display font-semibold ${color}`}>{value}</div>
    </div>
  );
};
