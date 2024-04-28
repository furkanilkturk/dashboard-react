export default function Card({ icon: Icon, title, data, subdata }) {
  return (
    <div className="rounded-xl border bg-black text-white shadow">
      <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
        <h3 className="text-sm font-medium tracking-tight">{title}</h3>
        <Icon />
      </div>
      <div className="p-6 pt-0">
        <div className="text-2xl font-bold">{data}</div>
        <p className="text-xs text-gray-500">{subdata}</p>
      </div>
    </div>
  );
}
