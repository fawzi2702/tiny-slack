import { FC } from 'react'
import { Col, Row } from 'reactstrap'

import { getTinySlackStore } from '../lib/stores/tinySlack.store'
import { SlackConversation } from '../types/Slack.interface'

export const Conversations: FC = () => {
  const { conversations, selectedChannelId, changeSelectedChannel } = getTinySlackStore()

  const handleSelect = (conversation: SlackConversation) => () => {
    changeSelectedChannel(conversation.id)
  }

  return (
    <Col className="bg-light p-4 overflow-scroll mh-100" xs="3">
      {conversations.map((conversation) => {
        const isCurrent = conversation.id === selectedChannelId
        return (
          <Row
            key={conversation.id}
            className="cursor-pointer my-1"
            onClick={handleSelect(conversation)}>
            <p className={isCurrent ? 'fw-bold' : ''}>#{conversation.name}</p>
          </Row>
        )
      })}
    </Col>
  )
}
