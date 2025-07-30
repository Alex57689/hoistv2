// middleware.tsx
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Disable specific routes in production
  if (process.env.NODE_ENV === 'production') {
    const restrictedPaths = ['/ourrange', '/cylinders']
    
    if (restrictedPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
      return new NextResponse('Route not available', { status: 404 })
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/ourrange/:path*', '/cylinders/:path*']
}