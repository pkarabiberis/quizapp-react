export const questionsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_QUESTIONS':
      return state.filter(question => question.quizName === action.quizName);

    case 'SET_FEEDBACK':
      let newState = [...state];
      if (action.correct) {
        newState[action.i].feedback = 'Correct';
        newState[action.i].answers[action.answerIndex].checked = true;
        if (newState[action.i].attemps > 0) newState[action.i].attemps--;

        if (!newState[action.i].multipleAnswers)
          newState[action.i].finished = true;

        // If no attemps left on multianswer question
        if (
          newState[action.i].multipleAnswers &&
          newState[action.i].attemps === 0
        ) {
          newState[action.i].finished = true;
        }

        // Find how many correct answers & correct checked answers there is on multianswer question
        // Compare and disable checkboxes if true
        if (newState[action.i].multipleAnswers) {
          let correctAnswers = newState[action.i].answers.map(
            answer => answer.isCorrect
          );
          let countCorrectAnswers = correctAnswers.reduce(
            (acc, cur) => acc + cur,
            0
          );

          let correctCheckedAnswers = newState[action.i].answers.map(
            answer => answer.isCorrect && answer.checked
          );
          let countCorrectCheckedAnswers = correctCheckedAnswers.reduce(
            (acc, cur) => acc + cur,
            0
          );

          if (countCorrectAnswers === countCorrectCheckedAnswers) {
            newState[action.i].finished = true;
          }
        }
      } else {
        newState[action.i].feedback = 'Not correct';
        newState[action.i].answers[action.answerIndex].checked = true;
        if (newState[action.i].attemps > 0) newState[action.i].attemps--;

        if (
          !newState[action.i].multipleAnswers &&
          newState[action.i].attemps === 0
        )
          newState[action.i].finished = true;

        if (
          newState[action.i].multipleAnswers &&
          newState[action.i].attemps === 0
        ) {
          newState[action.i].finished = true;
        }
      }
      return newState;

    case 'FETCH_PROGRESS':
      console.log(action);
      return state;

    default:
      return state;
  }
};
