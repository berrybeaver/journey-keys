import { NextResponse } from "next/server";
import { chatMessages, users } from "../chatbackend";

export async function POST(req) {
  // TODO: Implement the send API endpoint, see readme for details
  try {
    const body = await req.json();
    const { message, senderName } = body;

    if (!message || !senderName) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
  /*
    if (!users.includes(senderName)) {
      return NextResponse.json({ error: "Invalid sender name" }, { status: 400 });
    }
  */
    const newMessage = { message, senderName };
    chatMessages.push(newMessage);

    return NextResponse.json(newMessage);
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
