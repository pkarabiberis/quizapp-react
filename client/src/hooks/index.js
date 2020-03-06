import { useState, useEffect } from 'react';
import { quizDescriptions, quizQuestions } from '../quizData.js';

export const useQuestions = (selectedQuestion, correct) => {
  const [questions, setQuestions] = useState([]);
  let quizName = localStorage.getItem('Quiz');

  useEffect(() => {
    let selectedQuestions = quizQuestions.filter(
      question => question.quizName === quizName
    );

    if (JSON.stringify(selectedQuestions) !== JSON.stringify(questions)) {
      setQuestions(selectedQuestions);
    }
  }, [quizName, selectedQuestion, questions]);

  return { questions };
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
