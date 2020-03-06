export const questionsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_QUESTIONS':
      return state.filter(question => question.quizName === action.quizName);
    case 'SET_FEEDBACK':
      let newState = [...state];
      action.correct
        ? (newState[action.i].feedback = 'Correct')
        : (newState[action.i].feedback = 'Not correct');
      console.log(newState);
      return newState;

    default:
      return state;
  }
};
