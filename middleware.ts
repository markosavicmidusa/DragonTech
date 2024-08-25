import { NextResponse } from 'next/server';

export default function middleware(request: Request) {
  // Implement your custom middleware logic here
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/'],
};
