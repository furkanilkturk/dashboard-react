export default function HourlyProductSaleNotification({
  productImage,
  productName,
  amount,
  time,
  date,
}) {
  return (
    <div className="rounded-xl border">
      <div className="flex justify-between">
        <div className="mt-2 flex gap-4 p-2">
          <input type="checkbox" className="mb-6"></input>
          <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
            <img
              src={productImage}
              alt={productName}
              className="aspect-square h-full w-full grayscale"
            />
          </span>
          <div className="flex gap-2">
            <div className="w-[220px]">
              <h2 className="font-bold">Hourly Sale Report:</h2>
              <h3>
                {" "}
                {productName} sold {amount} times
              </h3>
              <p className="text-gray-400">
                {time}, {date}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <button className="h-12 min-w-min rounded-lg border bg-white px-2 font-bold text-orange-800">
                Go to Reports
              </button>
              <button className="h-12 min-w-min rounded-lg border bg-white px-2 font-bold text-black">
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>

        <div className="mr-2 mt-2 h-4 w-4 rounded-full bg-blue-600"></div>
      </div>
    </div>
  );
}
