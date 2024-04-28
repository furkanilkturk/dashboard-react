export default function TabList({ isActive, setIsActive }) {
  function handleClick(tabName) {
    setIsActive(tabName);
  }
  return (
    <div className="flex justify-between border-b pt-4">
      <div>
        <button
          onClick={() => handleClick("inbox")}
          className={`rounded-lg p-4 px-8 ${isActive === "inbox" && "border"}`}
        >
          Inbox
        </button>
        <button
          onClick={() => handleClick("read")}
          className={`rounded-lg p-4 px-8 ${isActive === "read" && "border"}`}
        >
          Read
        </button>
      </div>
      <button className="p-4 px-1">Mark as read</button>
    </div>
  );
}
