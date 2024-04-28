import { IoMailUnread } from "react-icons/io5";
export default function MailNotification({ name, time, date }) {
  return (
    <div className="rounded-xl border">
      <div className="flex justify-between">
        <div className="mt-2 flex gap-4 p-2">
          <input type="checkbox" className="mb-6"></input>
          <span className="relative flex h-9 w-8 shrink-0 overflow-hidden rounded-full">
            <IoMailUnread className="aspect-square h-full w-full" />
          </span>
          <div className="flex gap-2">
            <div className="w-[220px]">
              <h2 className="font-bold">{name} sent you a mail</h2>
              <p className="text-gray-400">
                {time}, {date}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <button className="h-10 min-w-min rounded-lg bg-white px-6 font-bold text-blue-800">
                Go to Mail
              </button>
            </div>
          </div>
        </div>

        <div className="mr-2 mt-2 h-4 w-4 rounded-full bg-blue-600"></div>
      </div>
    </div>
  );
}
