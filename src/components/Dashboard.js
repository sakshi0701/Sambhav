import React, { useState } from "react"
import { Container, Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center mt-5">
        <Card style={{ width: "80%" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            <Link to="/update-profile" className="btn btn-info w-100 mt-3">
              Update Profile
          </Link>
          </Card.Body>
        </Card>
      </Container>
      <div className="w-100 text-center mt-2">
        <button type="button" variant="link" onClick={handleLogout} className="btn btn-outline-primary w-50">
          Log Out
        </button>
      </div>

      <Container className="d-flex p-2 align-items-center justify-content-center flex-wrap mt-5">
        <Card className="m-2" style={{ width: "40%" }}>
          <Link to="/buissness">Buissness</Link>
        </Card>

        <Card className="m-2" style={{ width: "40%" }}>
          <Link to="/education">Education</Link>
        </Card>

        <Card className="m-2" style={{ width: "40%" }}>
          <Link to="/health">Health</Link>
        </Card>

        <Card className="m-2" style={{ width: "40%" }}>
          <Link to="/environment">Environment</Link>
        </Card>
      </Container>
    </>
  )
}