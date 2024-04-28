import { NavLink, Outlet } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import Personal from "../images/personal.jpg";
export default function Layout() {
  return (
    <div className="m-16 overflow-hidden rounded-[0.5rem] border border-zinc-700 bg-black shadow-md md:shadow-xl">
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4 ">
            <button
              className="inline-flex h-9 w-[200px] items-center justify-between  whitespace-nowrap rounded-md border  px-4 py-2 text-sm font-medium  shadow-sm transition-colors hover:border-none hover:bg-zinc-700 focus-visible:outline-none"
              aria-label="Select a team"
              type="button"
            >
              <span className="mr-2 flex h-5 w-5 shrink-0 gap-4 text-white">
                <img
                  src={Personal}
                  alt="Mustafa Furkan İlktürk"
                  className="aspect-square h-full w-full rounded-full grayscale "
                />
                Mustafa Furkan
                <IoChevronDown className=" ml-auto mt-[2px] h-4 w-4 shrink-0 text-white opacity-50" />
              </span>
            </button>
            <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
              <NavLink
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-white"
                to="/"
              >
                Overview
              </NavLink>
              <NavLink
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-white"
                to="/team"
              >
                Team
              </NavLink>
              <NavLink
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-white"
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-white"
                to="/settings"
              >
                Settings
              </NavLink>
            </nav>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
