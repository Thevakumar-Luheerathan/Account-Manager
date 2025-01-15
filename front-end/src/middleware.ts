import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { USERNAME_COOKIE } from './types/auth.types';

export function middleware(request: NextRequest) {
    const usernameCookie = request.cookies.get(USERNAME_COOKIE);

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!usernameCookie) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*']
};