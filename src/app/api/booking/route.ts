import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { consultationType, name, email, phone, date, message } = body;

    // Log structured booking details
    console.log('[BOOKING RECEIVED]', {
      timestamp: new Date().toISOString(),
      consultationType,
      name,
      email,
      phone,
      preferredDate: date,
      notes: message || 'None provided',
    });

    // In production, dispatch email to admin@inspirexcellence.org and prerona@inspirexcellence.org,
    // or trigger a webhook to Calendly / Zapier / Google Calendar API.
    return NextResponse.json(
      {
        success: true,
        message: 'Consultation request received successfully',
        data: {
          consultationType,
          name,
          email,
          phone,
          date,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[BOOKING ERROR]', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}