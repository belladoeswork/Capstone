import { fetchUser } from "@/lib/fetchUser";

import AvatarOption from "@/components/AvatarOption.jsx";

import ProfilePage from "@/components/ProfilePage.jsx";
import DisplayProfileImg from "@/components/DisplayProfileImg.jsx";

export default async function Profile() {
  const user = await fetchUser();
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProfilePage user={user} />
    </div>
  );
}
