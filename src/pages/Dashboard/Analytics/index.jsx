import AnalyticsTotalSales from "./AnalyticsCharts/AnalyticsTotalSales";
import AnalyticsSignups from "./AnalyticsCharts/AnalyticsSignups";
import AnalyticsDevices from "./AnalyticsCharts/AnalyticsDevices";
import AnalyticsTraffic from "./AnalyticsCharts/AnalyticsTraffic";

export default function Analytics() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-3 items-center justify-center rounded-xl border bg-black text-white shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              Monthly Total Sales
            </h3>
            <p className="text-sm text-gray-500">
              We sold 1.667 product this month
            </p>
          </div>
          <div className="ml-[22px] p-6 pl-2 pt-0">
            <AnalyticsTotalSales />
          </div>
        </div>
        <div className="col-span-4 rounded-xl border bg-black text-white shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              Monthly Signups
            </h3>
            <p className="text-sm text-gray-500">
              We have gained 174 new customers this month
            </p>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-8">
              <AnalyticsSignups />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------- */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 items-center justify-center rounded-xl border bg-black text-white shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              Monthly Devices
            </h3>
            <p className="text-sm text-gray-500">
              Devices used by our members while registering
            </p>
          </div>
          <div className="flex items-center justify-center p-6 pl-2 pt-0">
            <AnalyticsDevices />
          </div>
        </div>
        <div className="col-span-3 rounded-xl border bg-black text-white shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              Monthly Traffic
            </h3>
            <p className="text-sm text-gray-500">
              Where the users we attract to the site come from
            </p>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-8">
              <AnalyticsTraffic />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
