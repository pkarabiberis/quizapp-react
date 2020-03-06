import React, { useEffect } from 'react';
import { useQuizValue, useSelectedQuizValue } from '../context';
import { QuizQuestions } from './QuizQuestions';

export const Quiz = () => {
  const { quizzes, quizDispatch } = useQuizValue();
  const { questions, questionsDispatch } = useSelectedQuizValue();
  const quizName = localStorage.getItem('Quiz');

  useEffect(() => {
    const getQuiz = () => {
      quizDispatch({
        type: 'GET_INDIVIDUAL_QUIZ',
        quizName
      });
    };

    const getQuestions = () => {
      questionsDispatch({
        type: 'GET_QUESTIONS',
        quizName
      });
    };

    getQuiz();
    getQuestions();
  }, [quizName, quizDispatch, questionsDispatch]);

  return (
    <div className="text-center mt-5">
      {quizzes && <h1>{quizzes.name}</h1>}
      {questions.map((question, i) => (
        <QuizQuestions
          key={question.id}
          index={i}
          question={question}
          answers={question.answers}
        />
      ))}
    </div>
  );
};
