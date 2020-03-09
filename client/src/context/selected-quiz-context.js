import React, { createContext, useContext, useReducer } from 'react';
import { questionsReducer } from '../reducers/questionsReducer';

export const SelectedQuizContext = createContext();
export const SelectedQuizProvider = ({ children }) => {
  const [questions, questionsDispatch] = useReducer(questionsReducer, []);

  return (
    <SelectedQuizContext.Provider value={{ questions, questionsDispatch }}>
      {children}
    </SelectedQuizContext.Provider>
  );
};

export const useSelectedQuizValue = () => useContext(SelectedQuizContext);
