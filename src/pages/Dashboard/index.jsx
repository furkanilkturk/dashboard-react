import { useState } from "react";
import Header from "~/components/Header";
import Tablist from "./Overview/Tablist";
import Overview from "./Overview";
import Analytics from "./Analytics";
import Reports from "./Reports";
import Notifications from "./Notifications";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 text-white">
      <div className="flex items-center justify-between space-y-2 ">
        <Header title="Dashboard" />
      </div>

      <Tablist activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Overview" ? (
        <Overview />
      ) : activeTab === "Analytics" ? (
        <Analytics />
      ) : activeTab === "Reports" ? (
        <Reports />
      ) : (
        <Notifications />
      )}
    </div>
  );
}
