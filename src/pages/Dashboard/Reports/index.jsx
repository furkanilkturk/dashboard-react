import ReportsDemandChart from "./ReportsCharts/ReportsDemandChart";
import ReportsRemaningChart from "./ReportsCharts/ReportsRemaningChart";

import { TableData } from "./ReportsTable/TableData";
import TableHeader from "./ReportsTable/TableHeader";
import TableRow from "./ReportsTable/TableRow";

export default function Reports() {
  return (
    <>
      <div className="rounded-xl border p-6  pl-2 pt-0 shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold leading-none tracking-tight">
            Product Stocks
          </h3>
          <p className="text-sm text-gray-500">
            We have a total of 5.853 products left
          </p>
        </div>
        <div className="h-[600px] w-full  ">
          <ReportsRemaningChart />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-xl border bg-black text-white shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              Demanding Products
            </h3>
            <p className="text-sm text-gray-500">
              Demands compared to last month have increased or decreased
            </p>
          </div>
          <div className="p-6 pl-2 pt-0">
            <ReportsDemandChart />
          </div>
        </div>
        <div className="col-span-3 rounded-xl border bg-black text-white shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              Suppliers Status
            </h3>
            <p className="text-sm text-gray-500">Status list of products</p>
          </div>
          <div className="container mx-auto rounded-md  p-4 shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <TableHeader />
              </thead>
              <tbody className="divide-y divide-gray-500">
                {TableData.map((item) => (
                  <TableRow
                    key={item.name}
                    name={item.name}
                    date={item.date}
                    status={item.status}
                    amount={item.amount}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
