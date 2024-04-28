import Header from "~/components/Header";
import { TeamData } from "./Team";
import TeamRow from "./TeamRow";
import TeamHeader from "./TeamHeader";
import AddTeamMember from "./AddTeamMember";

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    active: true,
    role: "Admin",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    active: false,
    role: "User",
  },
];

export default function Team() {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6 text-white">
        <div className="flex items-center justify-between space-y-2 ">
          <Header title="Team" />
        </div>
      </div>
      <div className="space-y-4 p-2 text-white">
        <TeamHeader />
        {TeamData.map((data) => (
          <TeamRow
            key={data.id}
            avatar={data.avatar}
            name={data.name}
            mail={data.mail}
            status={data.status}
            role={data.role}
          />
        ))}
      </div>

      <AddTeamMember />
    </>
  );
}
