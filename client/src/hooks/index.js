import { useState, useEffect } from 'react';
import { quizDescriptions, quizQuestions } from '../quizData.js';

export const useQuestions = selectedQuiz => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    let selectedQuestions = quizQuestions.filter(
      question => question.quizId === selectedQuiz
    );
    setQuestions(selectedQuestions);
  }, [selectedQuiz]);

  return { questions, setQuestions };
};

export const useQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    //DB fetching logic here
    const allQuizzes = quizDescriptions;
    if (JSON.stringify(allQuizzes) !== JSON.stringify(quizzes)) {
      setQuizzes(allQuizzes);
    }
  }, [quizzes]);
  return { quizzes, setQuizzes };
};
