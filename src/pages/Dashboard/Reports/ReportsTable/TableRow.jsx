export default function TableRow({ name, date, status, amount }) {
  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4">{name}</td>
      <td className="whitespace-nowrap px-6 py-4">{date}</td>
      <td
        className={`whitespace-nowrap px-6 py-4 ${status === "Pending" ? "text-orange-700" : status === "Ongoing" ? "text-emerald-600" : status === "Arrived" ? "text-emerald-900" : ""}`}
      >
        {status}
      </td>
      <td className="whitespace-nowrap px-6 py-4">{amount}</td>
    </tr>
  );
}
