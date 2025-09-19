import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const debugToken = request.headers.get("x-debug-token");
  if (debugToken) console.log({ debugToken });
  return NextResponse.next();
}
