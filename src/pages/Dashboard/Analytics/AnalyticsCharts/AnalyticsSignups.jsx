import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SignupsData } from "./AnalyticsChartsData";

const getIntroOfPage = (label, payload) => {
  const weeks = ["1st Week", "2nd Week", "3rd Week", "4th Week"];

  const weekIndex = weeks.indexOf(label);

  if (weekIndex !== -1) {
    return `${weeks[weekIndex]} Signups : ${payload}`;
  } else {
    return "";
  }
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md bg-zinc-700 p-4 opacity-90">
        <h3 className="font-bold">{getIntroOfPage(label, payload[0].value)}</h3>
      </div>
    );
  }

  return null;
};

export default function AnalyticsSignups() {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer>
        <BarChart data={SignupsData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="signups" fill="#fff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
