import { slackUrls } from '../../slack/slackUrls'
import { HttpMethod } from '../../utils/apiMethodGuard'
import { fetcher } from '../../utils/fetcher'
import { formatBearerToken } from '../../utils/token'

export const postMessage = async (token: string, message: string, channelId: string) => {
  try {
    const data = await fetcher(slackUrls.sendMessage(), {
      method: HttpMethod.POST,
      headers: {
        Authorization: formatBearerToken(token),
      },
      body: new URLSearchParams({
        message,
        channelId,
      }),
    })

    if (data.success) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
    return false
  }
}
