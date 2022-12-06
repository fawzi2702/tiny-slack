import { SlackConversation } from '../../../types/Slack.interface'
import { slackUrls } from '../../slack/slackUrls'
import { fetcher } from '../../utils/fetcher'
import { formatBearerToken } from '../../utils/token'

export const fetchConverations = async (token: string): Promise<SlackConversation[]> => {
  try {
    const data = await fetcher(slackUrls.conversations(), {
      headers: {
        Authorization: formatBearerToken(token),
      },
    })

    return transformConversations(data.channels)
  } catch (error) {
    console.error(error)
    throw error
  }
}

const transformConversations = (conversations: any[]): SlackConversation[] => {
  return conversations.map<SlackConversation>((conversation) => ({
    created: conversation.created,
    id: conversation.id,
    name: conversation.name,
  }))
}
