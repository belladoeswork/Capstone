import LevelPage from "@/components/Level";
import { fetchUser } from "@/lib/fetchUser";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Levels() {
  const user = await fetchUser();

  const note = await prisma.note.findFirst({
    where: {
      userId: user.id,
    },
  });

  console.log(user.id);

  return (
    <div>
      {!user.id && (
        <Link href={"/login"}>You need to login/register to play</Link>
      )}
      {user.id && <LevelPage user={user} note={note} />}
    </div>
  );
}
