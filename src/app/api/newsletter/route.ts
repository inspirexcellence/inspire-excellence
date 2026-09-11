import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Newsletter subscription:', body);
    return NextResponse.json({ success: true, message: 'Subscribed successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to subscribe' }, { status: 500 });
  }
}
