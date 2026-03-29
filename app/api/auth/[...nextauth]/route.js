import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')

  if (!email) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  const response = NextResponse.redirect(new URL('/dashboard', request.url))
  
  response.cookies.set('user-email', email, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7
  })

  return response
}