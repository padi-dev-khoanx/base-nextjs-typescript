import { isRouterSeller, routerConstant } from '@/src/constant/routerConstant';
import { isSeller } from '@/src/utils/checkRoleUser';
import { NextRequest, NextResponse } from 'next/server';
import { JWT } from './src/constant/constant';

export const middleware = (request: NextRequest) => {
  const jwt = String(request.cookies.get(JWT));
  const role = String(request.cookies.get('role'));
  const pathName = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  if (isRouterSeller(pathName) && !isSeller(role)) {
    // return NextResponse.redirect(
    //   new URL(
    //     routerConstant.login + `?pre_path=${encodeURIComponent(pathName + search)}`,
    //     request.url,
    //   ),
    // );
  }

  return NextResponse.next();
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
    '/((?!api|_next/static|_next/image|favicon.ico|img).*)',

    /*
     * Match request from home
     */
    '/',
  ],
};
