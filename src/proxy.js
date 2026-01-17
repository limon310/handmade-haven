import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
  const isLoggedin = request.cookies.get("isLoggedIn")?.value == "true";
  if(!isLoggedin){
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: '/add-item/:path*',
}