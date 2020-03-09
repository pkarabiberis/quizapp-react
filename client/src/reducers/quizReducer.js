export const quizReducer = (state, action) => {
  switch (action.type) {
    case 'GET_QUIZZES':
      state = action.payload;
      return state;
    case 'GET_INDIVIDUAL_QUIZ':
      state = action.quiz;
      return state;
    case 'GET_QUESTIONS':
      return state.find(quiz => quiz.name === action.quizName);

    default:
      return state;
  }
};
