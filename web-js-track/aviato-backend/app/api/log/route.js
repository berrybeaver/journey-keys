import { NextResponse } from "next/server";
import { chatMessages } from "../chatbackend";

export async function GET(req) {
  // TODO: Implement the log API endpoint, see readme for details
  return NextResponse.json(chatMessages);
}
