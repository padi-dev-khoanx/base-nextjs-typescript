import { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     * - next image
     * - img in storage public
     */
    "/((?!api|_next/static|_next/image|favicon.ico|img).*)",

    /*
     * Match request from home
     */
    "/",
  ],
};
