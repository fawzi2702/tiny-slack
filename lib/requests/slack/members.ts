import { SlackMember } from '../../../types/Slack.interface'
import { slackUrls } from '../../slack/slackUrls'
import { fetcher } from '../../utils/fetcher'
import { formatBearerToken } from '../../utils/token'

export const fetchMembers = async (token: string) => {
  try {
    const data = await fetcher(slackUrls.members(), {
      headers: {
        Authorization: formatBearerToken(token),
      },
    })
    return transformMembers(data.members)
  } catch (error) {
    console.error(error)
    throw error
  }
}

const transformMembers = (membersRaw: any[]): SlackMember[] => {
  return membersRaw.map<SlackMember>((member) => ({
    id: member.id,
    name: member.real_name,
    avatar: member.profile.image_32,
  }))
}
