// middleware.ts (in your project root)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('🔥 Middleware is running!')
  console.log('URL:', request.nextUrl.pathname)
  console.log('NODE_ENV:', process.env.NODE_ENV)
  console.log('VERCEL_ENV:', process.env.VERCEL_ENV)
  
  // Block these routes in production
  const restrictedPaths = ['/ourrange', '/cylinders']
  
  // Check if current path should be blocked
  const shouldBlock = restrictedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )
  
  if (shouldBlock) {
    console.log('🚫 Blocking access to:', request.nextUrl.pathname)
    // Return a proper 404 response
    return new NextResponse(null, { status: 404 })
  }
  
  return NextResponse.next()
}

// Make sure this matches your routes exactly
export const config = {
  matcher: [
    '/ourrange/:path*',
    '/cylinders/:path*',
    '/ourrange',
    '/cylinders'
  ]
}