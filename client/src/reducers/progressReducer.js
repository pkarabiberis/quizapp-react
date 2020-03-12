export const progressReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROGRESS':
      console.log('REDUCER', action);
      state = action.questions;
      let newState2 = state;
      newState2 = action.questions;

      return newState2;

    case 'FETCH_PROGRESS':
      state = action.progress;
      return state;

    case 'UPDATE_PROGRESS':
      console.log('moi');
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
    default:
      return state;
  }
};
