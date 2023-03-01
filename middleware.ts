import { isRouterPrivate, routerConstant } from "./src/utils/routerConstant";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "./src/utils/verifyJwt";

export const middleware = (request: NextRequest) => {
  const jwt = request.cookies.get("jwt");
  const role = request.cookies.get("role");
  const pathName = request.nextUrl.pathname;
  const search = request.nextUrl.search;
  // if (isRouterPrivate(pathName) && !verifyJwt(jwt as string | undefined)) {
  //   return NextResponse.redirect(
  //     new URL(
  //       routerConstant.login +
  //         `?pre_path=${encodeURIComponent(pathName + search)}`,
  //       request.url
  //     )
  //   );
  // }
  // if (isRouterPrivate(pathName) && !verifyJwt(jwt as string | undefined)) {
  //   return NextResponse.redirect(
  //     new URL(
  //       routerConstant.login +
  //         `?pre_path=${encodeURIComponent(pathName + search)}`,
  //       request.url
  //     )
  //   );
  // }
};

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
