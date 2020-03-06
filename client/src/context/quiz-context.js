import React, { createContext, useContext, useReducer } from 'react';
import { quizDescriptions } from '../quizData';
import { quizReducer } from '../reducers/quizReducer';

export const QuizContext = createContext();
export const QuizProvider = ({ children }) => {
  const [quizzes, quizDispatch] = useReducer(quizReducer, quizDescriptions);

  return (
    <QuizContext.Provider value={{ quizzes, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizValue = () => useContext(QuizContext);
