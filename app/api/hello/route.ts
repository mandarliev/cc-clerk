import { NextResponse, NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(request: NextRequest) {
  const { userId, sessionId } = getAuth(request);

  if (!userId) {
    NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    return;
  }

  return NextResponse.json({ data: "Hello World", userId, sessionId });
}
