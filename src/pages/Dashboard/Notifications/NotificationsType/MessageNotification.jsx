export default function MessageNotification({
  name,
  time,
  content,
  date,
  avatar,
}) {
  return (
    <div className="rounded-xl border">
      <div className="flex justify-between">
        <div className="mt-2 flex gap-4 p-2">
          <input type="checkbox" className="mb-6"></input>
          <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
            <img
              src={avatar}
              alt={`${name} Avatar`}
              className="aspect-square h-full w-full grayscale"
            />
          </span>
          <div className="flex gap-2">
            <div className="w-[220px]">
              <h2 className="font-bold">{name} sent you a message</h2>
              <p className="text-gray-400">
                {time}, {date}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex h-14 min-w-min items-center justify-center rounded-lg border bg-white px-4 text-center text-black">
                <p>{content}</p>
              </div>
              <button className="h-12 min-w-min rounded-lg bg-white px-6 font-bold text-blue-800">
                Reply
              </button>
            </div>
          </div>
        </div>

        <div className="mr-2 mt-2 h-4 w-4 rounded-full bg-blue-600"></div>
      </div>
    </div>
  );
}
