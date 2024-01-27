import Landing from "@/components/Landing";
import { fetchUser } from "@/lib/fetchUser";

export const dynamic = "force-dynamic";
const user = await fetchUser();
export default function Home() {
  return (
    <main>
      <Landing user={user} />
    </main>
  );
}
