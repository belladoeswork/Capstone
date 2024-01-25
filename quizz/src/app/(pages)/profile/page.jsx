import { fetchUser } from "@/lib/fetchUser";

import AvatarOption from "@/components/AvatarOption.jsx";

import ProfilePage from "@/components/ProfilePage.jsx";
import { prisma } from "@/lib/prisma.js";

//import SaveProfileImg from "@/components/SaveProfileImg.jsx";

export default async function Profile({ avatar }) {
  const user = await fetchUser();
  const profile = await prisma.user.findFirst({
    where: { userId: user.Id },
  });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProfilePage user={user} profile={profile} />
    </div>
  );
}
