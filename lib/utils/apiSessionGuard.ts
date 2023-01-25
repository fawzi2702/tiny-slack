import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'

import { authOptions } from '../../pages/api/auth/[...nextauth]'
import { error } from './apiResponseformatter'
import { ResponseError, responses } from './apiResponses'

export const apiSessionGuard = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    const { status, message } = responses.error[ResponseError.UNAUTHORIZED]
    error(res, message, status)
    throw message
  }

  return session
}
