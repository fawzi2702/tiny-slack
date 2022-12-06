import { NextApiResponse } from 'next'

import { ResponseError, responses } from './apiResponses'

const DEFAULT_SUCCESS_STATUS = responses.success.status
export const success = (res: NextApiResponse, body: object = {}) => {
  return res.status(DEFAULT_SUCCESS_STATUS).json({
    success: true,
    ...body,
  })
}

const DEFAULT_ERROR_STATUS = responses.error[ResponseError.INTERNAL_ERROR].status
const DEFAULT_ERROR_MESSAGE = responses.error[ResponseError.INTERNAL_ERROR].message
export const error = (
  res: NextApiResponse,
  error: string = DEFAULT_ERROR_MESSAGE,
  status: number = DEFAULT_ERROR_STATUS,
) => {
  return res.status(status).json({
    success: false,
    error,
  })
}
