import { NextResponse, NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs";

export async function GET(request: NextRequest) {
  const { userId, sessionId } = getAuth(request);

  if (!userId) {
    NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    return;
  }

  const user = userId ? await clerkClient.users.getUser(userId) : null;
  console.log(user);

  return NextResponse.json({ data: "Hello World", userId, sessionId });
}
