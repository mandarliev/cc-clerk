import Profile from "@/components/Profile";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Clerk Authentication Demo</h1>
      <UserButton afterSignOutUrl="/" />
      <Profile />
    </main>
  );
}
