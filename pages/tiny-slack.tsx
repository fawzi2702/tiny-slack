import { GetServerSidePropsContext } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'

import { Chat } from '../components/Chat'
import { Conversations } from '../components/Conversations'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { fetchConverations } from '../lib/requests/slack/conversations'
import { fetchMembers } from '../lib/requests/slack/members'
import { getTinySlackStore } from '../lib/stores/tinySlack.store'
import { SlackConversation, SlackMember } from '../types/Slack.interface'
import { authOptions } from './api/auth/[...nextauth]'

interface Props {
  conversations: SlackConversation[]
  members: SlackMember[]
}

export default function Logged({ conversations, members }: Props) {
  const session = useSession({
    required: true,
  })
  const { setConversations, setMembers } = getTinySlackStore()
  const {
    data: { user },
  } = session

  useEffect(() => {
    setConversations(conversations)
  }, [conversations])

  useEffect(() => {
    setMembers(members)
  }, [members])

  return (
    <Layout>
      <Container fluid className="h-100 mh-100">
        <Col className="d-flex flex-column h-100 mh-100">
          <Header user={user} />
          <Row className="flex-grow-1 flex-shrink-1 h-75 mh-75">
            <Conversations />
            <Chat />
          </Row>
        </Col>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const conversations = await fetchConverations(session.accessToken)
  const members = await fetchMembers(session.accessToken)

  return {
    props: {
      session,
      conversations,
      members,
    },
  }
}
