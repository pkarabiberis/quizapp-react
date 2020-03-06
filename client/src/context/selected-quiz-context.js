import React, { createContext, useContext, useReducer } from 'react';
import { questionsReducer } from '../reducers/questionsReducer';
import { quizQuestions } from '../quizData';

export const SelectedQuizContext = createContext();
export const SelectedQuizProvider = ({ children }) => {
  const [questions, questionsDispatch] = useReducer(
    questionsReducer,
    quizQuestions
  );

  return (
    <SelectedQuizContext.Provider value={{ questions, questionsDispatch }}>
      {children}
    </SelectedQuizContext.Provider>
  );
};

export const useSelectedQuizValue = () => useContext(SelectedQuizContext);
