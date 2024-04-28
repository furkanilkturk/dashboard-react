import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { SalesData } from "./AnalyticsChartsData";

export default function AnalyticsTotalSales() {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={SalesData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            fill="#fff"
            stroke="#000"
            label
          ></Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
