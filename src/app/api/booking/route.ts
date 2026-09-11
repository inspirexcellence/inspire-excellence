import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Booking request:', body);
    return NextResponse.json({ success: true, message: 'Booking confirmed' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to process booking' }, { status: 500 });
  }
}
