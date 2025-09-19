import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const debugToken = request.headers.get("x-debug-token");
  if (debugToken) console.log({ debugToken });

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-middleware-date", new Date().toISOString());

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  return response;
}
