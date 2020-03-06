import React from 'react';
import { useQuizValue } from '../context';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelectedQuizValue } from '../context';

export const QuizList = () => {
  const { quizzes } = useQuizValue();
  const { setSelectedQuiz } = useSelectedQuizValue();

  const testeri = (id, name) => {
    setSelectedQuiz(id);
    localStorage.setItem('Quiz', name);
  };

  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col xs={6}>
          {quizzes.map(quiz => (
            <Card
              className="mt-2 border-dark"
              style={{ color: 'white', backgroundColor: '#07142f' }}
              key={quiz.id}
            >
              <Card.Body>
                <Card.Title>{quiz.description}</Card.Title>
                <Link to={`/quiz/${quiz.id}`}>
                  <Button
                    onClick={() => testeri(quiz.id, quiz.name)}
                    className="mt-2"
                    variant="outline-secondary"
                  >
                    Take Quiz
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
