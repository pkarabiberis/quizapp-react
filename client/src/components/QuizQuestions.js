import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { QuizAnswers } from './QuizAnswers';

export const QuizQuestions = ({ questions }) => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={6}>
          {questions.map(q => (
            <Card
              className="mt-2 border-dark"
              key={q.id}
              style={{ color: 'white' }}
            >
              <Card.Body>
                <Card.Title>{q.question}</Card.Title>
                <QuizAnswers answers={q.answers} />
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
