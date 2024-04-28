import {
  Bar,
  ComposedChart,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DemandData } from "./ReportsChartsData";
const getIntroOfPage = (label, payload) => {
  const products = [
    "Product A",
    "Product B",
    "Product C",
    "Product D",
    "Product E",
    "Product F",
  ];

  const productIndex = products.indexOf(label);

  if (productIndex !== -1) {
    return `${products[productIndex]} |  Demand : ${payload}`;
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

export default function ReportsDemandChart() {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer>
        <ComposedChart
          data={DemandData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={0} stroke="#fff" />
          <Bar dataKey="demand" fill="#fff" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
