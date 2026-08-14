import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LANDING_REDIRECT_PREFIXES, SEO_SLUG_REDIRECTS } from "@/lib/seo/slug-redirects";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  const exact = SEO_SLUG_REDIRECTS[pathname];
  if (exact) {
    const url = new URL(exact + request.nextUrl.search, request.url);
    return NextResponse.redirect(url, 301);
  }

  if (
    LANDING_REDIRECT_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
  ) {
    const url = new URL("/" + request.nextUrl.search, request.url);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
