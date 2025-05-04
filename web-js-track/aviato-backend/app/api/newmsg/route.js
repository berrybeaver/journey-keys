import { NextResponse } from "next/server";
import { chatMessages, lastPolledAt, users } from "../chatbackend";

export async function GET(request) {
  // TODO: Implement the newmsg API endpoint, see readme for details
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('id');

  if (!userId) {
    return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
  }

  if (!users.includes(userId)) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }

  const otherUser = userId === "Erlich Bachman CEO" ? "Jian Yang CEO" : "Erlich Bachman CEO";
  const lastTime = lastPolledAt[userId] || 0;

  const newMessages = chatMessages.filter(
      (msg) => msg.senderName === otherUser
  );

  lastPolledAt[userId] = Date.now();

  return NextResponse.json({ msg: newMessages });
}
