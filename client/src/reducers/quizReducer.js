export const quizReducer = (state, action) => {
  switch (action.type) {
    case 'GET_QUIZZES':
      return [...state];
    case 'GET_INDIVIDUAL_QUIZ':
      return state.find(quiz => quiz.name === action.quizName);
    case 'GET_QUESTIONS':
      return state.find(quiz => quiz.name === action.quizName);

    default:
      return state;
  }
};
