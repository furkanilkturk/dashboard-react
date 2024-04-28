import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RemainingData } from "./ReportsChartsData";

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
    return `${products[productIndex]} |  Number Of Remainders : ${payload}`;
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
export default function ReportsRemaningChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={RemainingData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={80} />
        <Tooltip content={<CustomTooltip />} />

        <Bar dataKey="amount" barSize={40} fill="#fff" />
      </BarChart>
    </ResponsiveContainer>
  );
}
