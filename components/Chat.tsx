import { ChangeEventHandler, FC, KeyboardEventHandler, useState } from 'react'
import { Button, Col, Input, Row } from 'reactstrap'

import { getTinySlackStore } from '../lib/stores/tinySlack.store'
import { ChatHistory } from './ChatHistory'

export const Chat: FC = () => {
  const { sendMessage } = getTinySlackStore()

  const [message, setMessage] = useState('')

  const handleSend = async () => {
    const result = await sendMessage(message)

    if (result) {
      setMessage('')
    }
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value
    setMessage(value)
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { altKey, code } = event

    if (code === 'Enter') {
      event.preventDefault()
      if (!altKey) {
        handleSend()
      } else {
        setMessage((message) => message + '\n')
      }
    }
  }

  return (
    <Col className="d-flex flex-column h-100">
      <ChatHistory />

      <Row className="position-sticky">
        <Col className="px-0">
          <Input
            type="textarea"
            className="rounded-3 w-100 h-100"
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </Col>
        <Col className="px-0" xs="2">
          <Button onClick={handleSend} color="success" className="h-100 w-100">
            Envoyer
          </Button>
        </Col>
      </Row>
    </Col>
  )
}
