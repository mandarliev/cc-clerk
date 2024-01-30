import Profile from "@/components/Profile";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  const { userId }: { userId: string | null } = auth();

  if (!user) return <div>Not logged in</div>;
  return (
    <main>
      <h1>Hello World - (user is {user?.firstName})</h1>
      <UserButton afterSignOutUrl="/" />
      <Profile />
    </main>
  );
}
