import { NextApiRequest, NextApiResponse } from 'next'

import { error } from './apiResponseformatter'
import { ResponseError, responses } from './apiResponses'

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const NOT_FOUND_STATUS = responses.error[ResponseError.NOT_FOUND].status
const NOT_FOUND_MESSAGE = responses.error[ResponseError.NOT_FOUND].message
export const apiMethodGuard = (
  req: NextApiRequest,
  res: NextApiResponse,
  allowed: HttpMethod | HttpMethod[],
) => {
  const method = req.method.toUpperCase()

  let isAllowed = false
  if (Array.isArray(allowed)) {
    isAllowed = allowed.some((am) => am === method)
  } else {
    isAllowed = allowed === method
  }

  if (!isAllowed) {
    error(res, NOT_FOUND_MESSAGE, NOT_FOUND_STATUS)
    return false
  }

  return true
}
