import { NextResponse } from "next/server.js";
import { cookies } from "next/headers";

export async function POST() {
  try {
    //because jwt is moved in the cookie, declare cookieStore so we can delete the token as user will logout and we don't need the token anymore (delete cookie called token)
    const cookieStore = cookies();
    cookieStore.delete("token");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
