import { fetchUser } from "@/lib/fetchUser";
import { prisma } from "@/lib/prisma";
//import ProfilePage from "@/components/ProfilePage.jsx";

import AvatarOption from "../../../components/AvatarOption.jsx";

import { BsFillTrophyFill } from "react-icons/bs";
import ProfilePage from "@/components/ProfilePage.jsx";

export default function Profile({ avatar }) {
  //const user = await fetchUser();

  return (
    <div>
      <h1>Your Profile</h1>
      <ProfilePage avatar={avatar} />
    </div>
  );
}
