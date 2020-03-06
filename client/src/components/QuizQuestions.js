import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useSelectedQuizValue } from '../context';

export const QuizQuestions = ({ question, answers, index }) => {
  const { questionsDispatch } = useSelectedQuizValue();

  const findFeedback = (correct, i) => {
    questionsDispatch({
      type: 'SET_FEEDBACK',
      correct,
      i
    });
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={6}>
          <Card className="mt-2 border-dark" style={{ color: 'white' }}>
            <Card.Body>
              <Card.Title>{question.question}</Card.Title>
              {answers.map(answer => (
                <p
                  onDoubleClick={() => findFeedback(answer.isCorrect, index)}
                  key={answer.answer}
                >
                  {answer.answer}
                </p>
              ))}
              <p>{question.feedback}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
