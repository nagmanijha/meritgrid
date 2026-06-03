import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check for the mock session cookie
  const session = request.cookies.get('meritgrid_session');
  
  const { pathname } = request.nextUrl;

  // Allowed public paths
  const isPublicPath = 
    pathname === '/' || 
    pathname === '/login' || 
    pathname === '/signup' || 
    pathname.startsWith('/u/') || // Public profiles are allowed
    pathname.startsWith('/api/'); // Allow API routes (they handle their own auth/mocking)

  // Redirect to login if accessing a protected route without a session
  if (!session && !isPublicPath) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect to dashboard if trying to access login while already authenticated
  if (session && (pathname === '/login' || pathname === '/signup')) {
    const role = request.cookies.get('meritgrid_role')?.value;
    const dest = role === 'employer' ? '/command' : '/roadmap';
    return NextResponse.redirect(new URL(dest, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
