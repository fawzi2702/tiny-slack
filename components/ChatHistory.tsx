import { FC, useEffect, useRef, useState } from 'react'
import { Col, Row } from 'reactstrap'

import { getTinySlackStore } from '../lib/stores/tinySlack.store'
import { SlackConversationMessage } from '../types/Slack.interface'

interface MessageProps {
  message: SlackConversationMessage
}

const Message: FC<MessageProps> = ({ message }) => {
  const { memberById } = getTinySlackStore()

  const sender = memberById(message.userId)

  return (
    <Row className="flex-shrink-1 justify-content-end align-items-start my-1">
      <Col className="flex-shrink-1" xs="auto">
        <img
          src={sender?.avatar}
          alt=""
          className="rounded-1"
          style={{ width: '25px', height: '25px', background: '#f9f9f9r' }}
        />
      </Col>
      <Col className="flex-shrink-1">
        <p className="fw-bold mb-1">{sender?.name || message.userId}</p>
        <pre>{message.text}</pre>
      </Col>
    </Row>
  )
}

export const ChatHistory: FC = () => {
  const scrollViewRef = useRef<HTMLDivElement>()
  const { currentChannel } = getTinySlackStore()

  const [initialScroll, setInitialScroll] = useState<boolean>(false)

  useEffect(() => {
    if (initialScroll) {
      setInitialScroll(false)
    }
  }, [currentChannel])

  useEffect(() => {
    const { current } = scrollViewRef
    if (!initialScroll && current && currentChannel) {
      current.scrollTo(0, current.scrollHeight)
      setInitialScroll(true)
    }
  }, [scrollViewRef, currentChannel, initialScroll])

  return (
    <div ref={scrollViewRef} className="col flex-grow-1 overflow-scroll w-100 p-4">
      {currentChannel?.messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  )
}
