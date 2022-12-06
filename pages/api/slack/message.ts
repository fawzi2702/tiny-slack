import { NextApiRequest, NextApiResponse } from 'next'

import { slackUrls } from '../../../lib/slack/slackUrls'
import { apiMethodGuard, HttpMethod } from '../../../lib/utils/apiMethodGuard'
import { error, success } from '../../../lib/utils/apiResponseformatter'
import { ResponseError, responses } from '../../../lib/utils/apiResponses'
import { apiSessionGuard } from '../../../lib/utils/apiSessionGuard'
import { fetcher } from '../../../lib/utils/fetcher'
import { formatBearerToken } from '../../../lib/utils/token'

interface Request extends NextApiRequest {
  body: {
    channelId: string
    message: string
  }
}

export default async function handler(req: Request, res: NextApiResponse) {
  try {
    if (!apiMethodGuard(req, res, HttpMethod.POST)) {
      return
    }

    await apiSessionGuard(req, res)

    const { message, channelId } = req.body
    if (!message || !channelId) {
      const { status, message: errorMessage } = responses.error[ResponseError.BAD_REQUEST]
      return error(res, errorMessage, status)
    }

    const data = await fetcher(slackUrls.internal.sendMessage(), {
      method: HttpMethod.POST,
      headers: {
        Authorization: formatBearerToken(process.env.SLACK_BOT_TOKEN),
      },
      body: new URLSearchParams({
        text: message,
        channel: channelId,
      }),
    })

    const isOk = !!data.ok

    if (isOk) {
      return success(res)
    } else {
      return error(res)
    }
  } catch (err) {
    console.error(err)

    if (!res.headersSent) {
      error(res)
    }
  }
}
