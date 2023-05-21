import { NextResponse } from 'next/server';


type Feedback = {
    email? : string,
    name? : string,
    message? : string

}

export async function POST(request: Request) {
  const data: Feedback = await request.json();

  const {email, name, message} = data;
  return NextResponse.json({
    name,
    email,
    message
  })
}
