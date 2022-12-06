import { SlackConversationHistory, SlackConversationMessage } from '../../../types/Slack.interface'
import { slackUrls } from '../../slack/slackUrls'
import { fetcher } from '../../utils/fetcher'
import { formatBearerToken } from '../../utils/token'

export const fetchConversation = async (
  token: string,
  conversationId: string,
): Promise<SlackConversationHistory> => {
  try {
    const data = await fetcher(slackUrls.conversation(conversationId), {
      headers: {
        Authorization: formatBearerToken(token),
      },
    })

    const messages = transformConversation(data.messages)

    return {
      id: conversationId,
      hasMore: !!data.has_more,
      messages,
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

const transformConversation = (messages: any[]): SlackConversationMessage[] => {
  return messages
    .filter((message) => message.type === 'message' && !message.subtype)
    .map<SlackConversationMessage>((message) => ({
      userId: message.user,
      text: message.text,
      date: new Date(message.ts * 1000),
    }))
    .reverse()
}
