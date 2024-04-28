import Cardlist from "./Cardlist";
import OverviewBar from "./OverviewCharts/OverviewBar";
import OverviewSales from "./OverviewCharts/OverviewSales";

export default function Overview() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Cardlist />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-xl border bg-black text-white shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              Overview
            </h3>
          </div>
          <div className="p-6 pl-2 pt-0">
            <OverviewBar />
          </div>
        </div>
        <div className="col-span-3 rounded-xl border bg-black text-white shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              Recent Sales
            </h3>
            <p className="text-sm text-gray-500">
              You made 186 sales this month
            </p>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-8">
              <OverviewSales />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
