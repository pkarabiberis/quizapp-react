import React, { useEffect, useState } from 'react';
import { useQuizValue } from '../context';
import { QuizQuestions } from './QuizQuestions';
import { useSelectedQuizValue } from '../context';
import { useQuestions } from '../hooks';

export const Quiz = () => {
  const findQuizByName = name => quizzes.find(quiz => quiz.name === name);

  const { quizzes } = useQuizValue();
  const { selectedQuiz } = useSelectedQuizValue();
  const { questions } = useQuestions(selectedQuiz);
  const [individualQuiz, setIndividualQuiz] = useState([]);

  let quizName = localStorage.getItem('Quiz');
  let quizByName = findQuizByName(quizName);

  useEffect(() => {
    setIndividualQuiz(quizByName);
  }, [individualQuiz, quizByName]);

  return (
    <div className="text-center mt-5">
      {individualQuiz && <h1>{individualQuiz.name}</h1>}
      {<QuizQuestions questions={questions} />}
    </div>
  );
};
