const slackApiBaseUrl = global.window
  ? `${process.env.NEXT_PUBLIC_SLACK_API_BASE_URL}/`
  : `${process.env.SLACK_API_BASE_URL}`
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const slackUrls = {
  conversations: () => `${slackApiBaseUrl}/conversations.list`,
  conversation: (conversationId: string) =>
    `${slackApiBaseUrl}/conversations.history?channel=${conversationId}`,
  members: () => `${slackApiBaseUrl}/users.list`,
  sendMessage: () => `${apiBaseUrl}/slack/message`,
  internal: {
    sendMessage: () => `${slackApiBaseUrl}/chat.postMessage`,
  },
}
