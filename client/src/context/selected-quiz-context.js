import React, { createContext, useContext, useState } from 'react';

export const SelectedQuizContext = createContext();
export const SelectedQuizProvider = ({ children }) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <SelectedQuizContext.Provider value={{ selectedQuiz, setSelectedQuiz }}>
      {children}
    </SelectedQuizContext.Provider>
  );
};

export const useSelectedQuizValue = () => useContext(SelectedQuizContext);
