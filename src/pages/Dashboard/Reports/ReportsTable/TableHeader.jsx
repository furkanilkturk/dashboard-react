export default function TableHeader() {
  return (
    <tr>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs  font-bold uppercase tracking-wider text-gray-500"
      >
        Product
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500"
      >
        Date
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500"
      >
        Status
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500"
      >
        Amount
      </th>
    </tr>
  );
}
