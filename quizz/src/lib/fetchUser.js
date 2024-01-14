import { prisma } from "./prisma.js";
import { cookies } from "next/headers.js"; // check this, if
import jwt from "jsonwebtoken";

export async function fetchUser() {
  try {
    //check if there is a cookie
    const cookieStore = cookies();
    //console.log(cookieStore);
    //const { value } = cookieStore.get("token"); //token is
    const userCookie = cookieStore.get("token");
    //console.log(userCookie);
    if (!userCookie) {
      return {};
    }
    //Decode the token
    const { userId } = jwt.verify(userCookie.value, process.env.JWT_SECRET);

    //send request to db to fetch this user
    const user = await prisma.user.findFirst({ where: { id: userId } });

    if (user) {
      delete user.password;
    }

    return user;
  } catch (error) {
    //console.log(error);
    return {};
  }
}
