import config from '@payload-config'
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import { createApiKeyErrorResponse, validateApiKey } from '../_shared/apiKey'
import {
  createCORSResponse,
  handleApiError,
  handleOptionsRequest
} from '../_shared/cors'
import { formatApiResponse } from '../products/utils/responses'

// Pre-flight request handler for CORS
export function OPTIONS(req: NextRequest) {
  console.log('OPTIONS /api/company-info: Handling preflight request')
  return handleOptionsRequest(req, ['GET', 'OPTIONS'])
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    // Validate API key to prevent spam
    if (!validateApiKey(req)) {
      const errorResponse = createApiKeyErrorResponse()
      return createCORSResponse(errorResponse, 401)
    }

    // Initialize Payload
    const payload = await getPayload({
      config,
    })

    // Fetch company information
    const companyInfo = await payload.findGlobal({
      slug: 'company-info',
      depth: 2, // Populate relations like logo
    })

    // Company info is public data, but requires API key to prevent spam
    // The requireAuth field is kept for admin control but not enforced in API

    // Return success response
    return formatApiResponse(companyInfo, 'Lấy thông tin công ty thành công')
  } catch (error) {
    console.error('Error fetching company information:', error)
    return handleApiError(error, 'Đã xảy ra lỗi khi lấy thông tin công ty. Vui lòng thử lại sau.')
  }
}
