export default function Tablist({ activeTab, setActiveTab }) {
  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-zinc-700 p-1"
    >
      <button
        type="button"
        role="tab"
        className={`inline-flex items-center justify-center rounded-md  px-3 py-1 text-sm font-medium shadow  shadow-black transition-all focus-visible:outline-none ${
          activeTab === "Overview" ? "bg-black" : "opacity-50 shadow-none"
        }`}
        onClick={() => handleTabClick("Overview")}
      >
        Overview
      </button>
      <button
        type="button"
        role="tab"
        className={`inline-flex items-center justify-center rounded-md  px-3 py-1 text-sm font-medium shadow  shadow-black transition-all focus-visible:outline-none ${
          activeTab === "Analytics" ? "bg-black" : "opacity-50 shadow-none"
        }`}
        onClick={() => handleTabClick("Analytics")}
      >
        Analytics
      </button>
      <button
        type="button"
        role="tab"
        className={`inline-flex items-center justify-center rounded-md  px-3 py-1 text-sm font-medium shadow  shadow-black transition-all focus-visible:outline-none ${
          activeTab === "Reports" ? "bg-black" : "opacity-50 shadow-none"
        }`}
        onClick={() => handleTabClick("Reports")}
      >
        Reports
      </button>
      <button
        type="button"
        role="tab"
        className={`inline-flex items-center justify-center rounded-md  px-3 py-1 text-sm font-medium shadow  shadow-black transition-all focus-visible:outline-none ${
          activeTab === "Notifications" ? "bg-black" : "opacity-50 shadow-none"
        }`}
        onClick={() => handleTabClick("Notifications")}
      >
        Notifications
      </button>
    </div>
  );
}
