import React, { createContext, useContext } from 'react';
import { useQuiz } from '../hooks';

export const QuizContext = createContext();
export const QuizProvider = ({ children }) => {
  const { quizzes, setQuizzes } = useQuiz();

  return (
    <QuizContext.Provider value={{ quizzes, setQuizzes }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizValue = () => useContext(QuizContext);
