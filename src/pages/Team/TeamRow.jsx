import { IoTrash } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";

export default function TeamRow({ avatar, name, mail, status, role }) {
  return (
    <div className="grid  grid-cols-[10rem_20.4rem_20.4rem_14rem_14rem_12rem] pb-4 [&:not(:last-child)]:border-b ">
      <span className="relative ml-8 flex h-9 w-9 shrink-0 items-center overflow-hidden rounded-full">
        <img
          src={avatar}
          alt={`${name} Avatar`}
          className="aspect-square h-full w-full grayscale"
        />
      </span>
      <div>{name}</div>
      <div>{mail}</div>
      <div
        className={`${status === "Active" ? "text-green-800" : "text-red-700"}`}
      >
        {status}
      </div>
      <div>{role}</div>
      <div className="flex items-center gap-2">
        <button className="text-xl">
          <IoTrash />
        </button>
        <button className="text-xl">
          <IoPencil />
        </button>
      </div>
    </div>
  );
}
