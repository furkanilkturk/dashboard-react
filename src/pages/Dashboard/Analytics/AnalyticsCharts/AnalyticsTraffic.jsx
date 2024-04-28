import {
  Funnel,
  FunnelChart,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { TrafficData } from "./AnalyticsChartsData";

export default function AnalyticsTraffic() {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer>
        <FunnelChart>
          <Tooltip />
          <Funnel
            dataKey="value"
            data={TrafficData}
            isAnimationActive
            stroke="#000"
          >
            <LabelList position="right" fill="#fff" stroke="#" dataKey="name" />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
}
