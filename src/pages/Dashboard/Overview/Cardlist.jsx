import Card from "~/components/Card";
import { IoCashOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { IoCardOutline } from "react-icons/io5";
import { IoWifiOutline } from "react-icons/io5";
export default function Cardlist() {
  return (
    <>
      <Card
        icon={IoCashOutline}
        title="Total Revenue"
        data="$19,007.000"
        subdata="+19.07% from last month"
      />
      <Card
        icon={IoPeopleOutline}
        title="New Signups"
        data="+1230"
        subdata="+%29.06 from last month"
      />
      <Card
        icon={IoCardOutline}
        title="Sales"
        data="+6502"
        subdata="+%12 from last month"
      />
      <Card
        icon={IoWifiOutline}
        title="Active Now"
        data="197"
        subdata="+54 since last hour"
      />
    </>
  );
}
