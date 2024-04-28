export default function CustomerSales({ name, email, data, avatar }) {
  return (
    <div className="flex items-center">
      <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
        <img
          src={avatar}
          alt="Avatar"
          className="aspect-square h-full w-full grayscale"
        />
      </span>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm leading-none text-gray-600">{email}</p>
      </div>
      <div className="ml-auto font-bold">{data}</div>
    </div>
  );
}
