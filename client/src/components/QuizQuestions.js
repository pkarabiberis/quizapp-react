import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { QuizAnswers } from './QuizAnswers';

export const QuizQuestions = ({ question, answers, index }) => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={6}>
          <Card className="mt-2 border-dark" style={{ color: 'white' }}>
            <Card.Body>
              <Card.Title>{question.question}</Card.Title>
              <span>Attemps left: {question.attemps}</span>
              <br />
              <QuizAnswers qIndex={index} answers={answers} />
              <p>{question.feedback}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
