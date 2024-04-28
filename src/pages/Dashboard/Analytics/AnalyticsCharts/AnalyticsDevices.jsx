import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DevicesData } from "./AnalyticsChartsData";

const getIntroOfPage = (label, payload) => {
  const devices = ["IOS", "Android", "PC", "Mac", "Tablet"];

  const deviceIndex = devices.indexOf(label);

  if (deviceIndex !== -1) {
    return `${devices[deviceIndex]} Device : ${payload}`;
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

export default function AnalyticsDevices() {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer>
        <BarChart data={DevicesData}>
          <XAxis dataKey="device" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" fill="#fff"></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
