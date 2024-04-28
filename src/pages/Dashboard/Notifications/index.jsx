import { useState } from "react";
import Inbox from "./Inbox";
import TabList from "./TabList";
import Read from "./Read";

export default function Notifications() {
  const [isActive, setIsActive] = useState("inbox");

  return (
    <>
      <TabList isActive={isActive} setIsActive={setIsActive} />
      {isActive === "inbox" ? <Inbox /> : <Read />}
    </>
  );
}
