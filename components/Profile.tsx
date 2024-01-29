"use client";
import { useAuth } from "@clerk/nextjs";

function Profile() {
  const { getToken, isLoaded, isSignedIn, userId } = useAuth();
  return <div>This has info about the user profile</div>;
}

export default Profile;
