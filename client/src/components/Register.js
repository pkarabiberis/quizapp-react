import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { firebase } from '../firebase';

export const Register = ({ history }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);

  const testeri = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        const uid = res.user.uid;
        localStorage.setItem('uid', uid);
        firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .set({
            username
          })
          .then(() => {
            history.push('/quizzes');
          });
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
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
              />
            </Form.Group>
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
