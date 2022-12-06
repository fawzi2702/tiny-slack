import { getSession } from 'next-auth/react'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import {
  SlackConversation,
  SlackConversationHistory,
  SlackMember,
} from '../../types/Slack.interface'
import { fetchConversation } from '../requests/slack/conversation'
import { postMessage } from '../requests/slack/message'
export const useTinySlackStore = () => {
  const [conversations, setConversations] = useState<SlackConversation[]>([])
  const [members, setMembers] = useState<SlackMember[]>([])
  const [selectedChannelId, setSelectedChannelId] = useState<string>(null)
  const [currentChannel, setCurrentChannel] = useState<SlackConversationHistory>(null)

  const membersMap = useMemo<Record<string, SlackMember>>(() => {
    return members.reduce<Record<string, SlackMember>>((acc, member) => {
      acc[member.id] = member
      return acc
    }, {})
  }, [members])

  useEffect(() => {
    if (!selectedChannelId && conversations.length > 0) {
      setSelectedChannelId(conversations[0].id)
    }
  }, [conversations])

  useEffect(() => {
    if (selectedChannelId) {
      fetchCurrentConversation()
    }
  }, [selectedChannelId])

  const fetchCurrentConversation = async () => {
    const session = await getSession()
    const conversation = await fetchConversation(session.accessToken, selectedChannelId)
    setCurrentChannel(conversation)
  }

  const changeSelectedChannel = (id: string) => {
    setSelectedChannelId(id)
  }

  const memberById = useCallback<(id: string) => SlackMember>(
    (id: string) => membersMap[id] || null,
    [membersMap],
  )

  const sendMessage = async (message: string) => {
    const session = await getSession()
    return postMessage(session.accessToken, message, selectedChannelId)
  }

  return {
    conversations,
    currentChannel,
    selectedChannelId,

    setConversations,
    changeSelectedChannel,
    setMembers,
    memberById,
    sendMessage,
  }
}

export type TinySlackStore = ReturnType<typeof useTinySlackStore>

export const TinySlackStoreContext = createContext<TinySlackStore>(null)

export const getTinySlackStore = () => {
  return useContext(TinySlackStoreContext)
}
