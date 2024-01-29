import Landing from "@/components/Landing";
import { fetchUser } from "@/lib/fetchUser";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await fetchUser();
  return (
    <main>
      <Landing user={user} />
    </main>
  );
}
