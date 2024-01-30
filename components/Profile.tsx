"use client";
import { useAuth, useUser } from "@clerk/nextjs";

function Profile() {
  const { getToken, isLoaded, sessionId, userId } = useAuth();
  const { isSignedIn, user } = useUser();

  if (!isLoaded || !userId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      CLIENT COMPONENT: This has info about the user profile (user id: {userId})
    </div>
  );
}

export default Profile;
