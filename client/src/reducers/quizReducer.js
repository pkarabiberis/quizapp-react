export const quizReducer = (state, action) => {
  switch (action.type) {
    case 'GET_QUIZZES':
      state = action.payload;
      return state;
    case 'GET_INDIVIDUAL_QUIZ':
      state = action.quiz;
      return state;

    default:
      return state;
  }
};
