import config from '@payload-config';
import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: CORS_HEADERS,
  });
}

/**
 * Submit contact form
 * POST /api/contact-form
 */
export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config });

    const body = await req.json();
    console.log('Contact form submission:', body);

    // Validate required fields
    const { name, email, message, subject, phone, company } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Vui lòng điền đầy đủ họ tên, email và nội dung.',
        },
        {
          status: 400,
          headers: CORS_HEADERS,
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Vui lòng nhập địa chỉ email hợp lệ.',
        },
        {
          status: 400,
          headers: CORS_HEADERS,
        }
      );
    }    // Create contact submission
    const contactSubmission = await payload.create({
      collection: 'contact-submissions',
      data: {
        name,
        email,
        phone: phone || '',
        subject: subject || 'general',
        message,
        status: 'new',
      },
    });

    console.log('Contact submission created successfully:', contactSubmission.id);

    return NextResponse.json(
      {
        success: true,
        message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.',
        data: {
          id: contactSubmission.id,
          submittedAt: contactSubmission.createdAt,
        },
      },
      {
        status: 200,
        headers: CORS_HEADERS,
      }
    );

  } catch (error) {
    console.error('Error submitting contact form:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Có lỗi xảy ra khi gửi form. Vui lòng thử lại.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 500,
        headers: CORS_HEADERS,
      }
    );
  }
}
