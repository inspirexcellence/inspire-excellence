import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Placeholder for real email notification service (e.g. Resend, SendGrid)
    console.log('Contact form submission:', body);
    
    return NextResponse.json({ success: true, message: 'Message received' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to process request' }, { status: 500 });
  }
}
