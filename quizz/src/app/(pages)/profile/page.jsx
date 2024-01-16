import { fetchUser } from "@/lib/fetchUser";
import { prisma } from "@/lib/prisma";
import { BsFillTrophyFill } from "react-icons/bs";

export default async function Profile() {
  const user = await fetchUser();

  return (
    <div className="profile-container">
      <div className="profile-avatar-container">
        <div className="profile-avatar">{user.avatar}</div>
      </div>
      {user.badge}
      <BsFillTrophyFill />
    </div>
  );
}
