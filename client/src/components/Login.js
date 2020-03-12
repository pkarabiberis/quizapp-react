import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { firebase } from '../firebase';
import { useUserValue } from '../context/user-context';

export const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);
  const { setUser } = useUserValue();

  const testeri = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
      })
      .catch(err => {
        console.log(err);
        setErr(`Error: ${err.message}`);
      });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6}>
          <Form onSubmit={testeri} style={{ marginTop: '100px' }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
            {err && <p style={{ color: 'red', marginTop: '10px' }}>{err}</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
