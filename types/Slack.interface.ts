export interface SlackConversation {
  id: string
  name: string

  created: number
}

export interface SlackMember {
  id: string
  name: string
  avatar: string
}

export interface SlackConversationHistory {
  id: string
  messages: SlackConversationMessage[]
  hasMore: boolean
}

export interface SlackConversationMessage {
  userId: string
  text: string
  date: Date
}
