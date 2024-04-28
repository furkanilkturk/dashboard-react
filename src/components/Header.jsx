import { IoCalendarOutline } from "react-icons/io5";

export default function Header({ title }) {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight ">{title}</h2>
      <div className="flex items-center space-x-2">
        <div className="grid gap-2">
          <button
            className="flex h-9 w-[260px] items-center justify-start gap-1 rounded-md border border-zinc-700 px-4 py-2 text-left text-sm font-normal  transition-colors focus-visible:outline-none"
            id="date"
            type="button"
            aria-haspopup="dialog"
          >
            <IoCalendarOutline className="mb-[2px] h-[15px] w-[15px]" />
            <span>Feb 10, 2024 - Feb 11, 2024</span>
          </button>
        </div>
        <button className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md  bg-white px-4 py-4 text-sm font-medium text-black transition-colors hover:bg-slate-100">
          Download
        </button>
      </div>
    </>
  );
}
