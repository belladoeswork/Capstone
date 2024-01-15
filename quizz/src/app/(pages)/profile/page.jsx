import { fetchUser } from "@/lib/fetchUser";
import { prisma } from "@/lib/prisma";
import { BsFillTrophyFill } from "react-icons/bs";

export default async function Profile() {
  const user = await fetchUser();

  return (
    <div>
      {user.badge}
      <BsFillTrophyFill />
    </div>
  );
}
