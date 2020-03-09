import React, { createContext, useContext, useReducer } from 'react';
import { progressReducer } from '../reducers/progressReducer';

export const ProgressContext = createContext();
export const ProgressProvider = ({ children }) => {
  const [progress, progressDispatch] = useReducer(progressReducer, []);

  return (
    <ProgressContext.Provider value={{ progress, progressDispatch }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgressValue = () => useContext(ProgressContext);
