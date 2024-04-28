import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
export default function AddTeamMember() {
  const [isActive, setIsActive] = useState(false);

  function handleClose() {
    setIsActive(false);
  }
  function handleOpen() {
    setIsActive(true);
  }
  
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    if (isActive) {
      window.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isActive]);

  return (
    <>
      <div className="flex items-center justify-center  border">
        <button
          onClick={() => handleOpen()}
          className="m-2 rounded-xl bg-white p-4 font-bold shadow hover:bg-gray-200"
        >
          Add Member
        </button>
      </div>
      {isActive && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-70">
          <div className="relative m-[0_auto] h-[24rem] w-[24rem] rounded border bg-black shadow">
            <button
              onClick={() => handleClose()}
              className="absolute right-2 top-2 mt-1 pt-1 text-xl text-white"
            >
              <IoClose />
            </button>
            <h1 className="mt-2 pt-2 text-center text-xl font-bold text-white">
              Add Team Member
            </h1>
            <form className="mt-14 flex h-full w-full flex-col gap-5 p-4">
              <div className="flex gap-5">
                <label className="w-16 p-1 font-bold text-white">Name : </label>
                <input type="text" className="rounded p-1 focus:outline-none" />
              </div>
              <div className="flex gap-5">
                <label className="w-16 p-1 font-bold text-white">Mail : </label>
                <input
                  type="email"
                  className="rounded p-1 focus:outline-none"
                />
              </div>
              <div className="flex gap-5">
                <label className="w-16 p-1 font-bold text-white">Role : </label>
                <input type="text" className="rounded p-1 focus:outline-none" />
              </div>
              <div className="mt-10 flex items-center justify-center ">
                <button className="rounded-lg bg-white p-2 text-black">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
