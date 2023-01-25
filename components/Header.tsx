import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import { FC } from 'react'
import { Button, Col, Row } from 'reactstrap'

interface Props {
  user: User
}

export const Header: FC<Props> = ({ user }) => {
  const handleSignOut = () => {
    signOut()
  }

  return (
    <Row className="bg-light justify-content-end align-items-center p-2">
      <Col className="d-flex justify-content-center">
        <span className="fw-bold">{user.name}</span>
      </Col>

      <Col xs="2" className="d-flex justify-content-center">
        <Button color="danger" onClick={handleSignOut}>
          Déconnexion
        </Button>
      </Col>
    </Row>
  )
}
