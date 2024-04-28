import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { MonthlySalesData } from "./OverviewChartsData";

const getIntroOfPage = (label, payload) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthIndex = months.indexOf(label);

  if (monthIndex !== -1) {
    return `${months[monthIndex]} Sales : ${payload}`;
  } else {
    return "";
  }
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md bg-zinc-700 p-4 opacity-90 ">
        <h3 className="font-bold">{getIntroOfPage(label, payload[0].value)}</h3>
      </div>
    );
  }

  return null;
};

export default function OverviewBar() {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer>
        <BarChart data={MonthlySalesData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="Sales" fill="#fff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
