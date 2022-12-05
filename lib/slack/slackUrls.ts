const slackApiBaseUrl = `${process.env.SLACK_API_BASE_URL}/api`

export const slackUrls = {
  conversations: () => `${slackApiBaseUrl}/conversations.list`,
}
