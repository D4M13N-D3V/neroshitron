import { NextRequest, NextResponse } from 'next/server'

export function middleware(req:NextRequest, res:NextResponse) {
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('x-path', req.nextUrl.pathname)
  
    return NextResponse.next({
      request: {
        headers: requestHeaders
      }
    })
  }