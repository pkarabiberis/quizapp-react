import React, { useEffect } from 'react';
import { useSelectedQuizValue, useProgressValue } from '../context';
import { firebase } from '../firebase';
import { useUserValue } from '../context/user-context';
const { uuid } = require('uuidv4');

// KEEP QUIZ QUESTIONS AS IS; ONLY MODIFY QUIZPROGRESS
export const QuizAnswers = ({ answers, qIndex }) => {
  const { questions } = useSelectedQuizValue();
  const { progress, progressDispatch } = useProgressValue();
  let quizName = localStorage.getItem('Quiz');
  //const { user } = useUserValue();
  const uid = localStorage.getItem('uid');

  const findFeedback = (correct, i, answerIndex, id) => {
    progressDispatch({
      type: 'UPDATE_PROGRESS',
      correct,
      i,
      answerIndex
    });

    // let userRef = firebase
    //   .firestore()
    //   .collection('quizQuestions')
    //   .doc(id);

    // userRef.get().then(doc => {
    //   // Mark answer checked
    //   let answerRef = doc.data().answers;
    //   let updatedAnswer = answerRef[answerIndex];
    //   updatedAnswer.checked = true;
    //   answerRef[answerIndex] = updatedAnswer;

    //   userRef.update({
    //     answers: answerRef
    //   });

    //   // Decrement attemps
    //   let attemps = doc.data().attemps;
    //   if (attemps > 0) {
    //     userRef.update({
    //       attemps: attemps - 1
    //     });
    //   }
    //   // Set feedback
    //   if (correct) {
    //     userRef.update({
    //       feedback: 'Correct!'
    //     });
    //   } else {
    //     userRef.update({
    //       feedback: 'Not correct'
    //     });
    //   }
    // });
  };

  useEffect(() => {
    let userRef = firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .collection('quizzes')
      .doc(quizName);

    // Mark answer checked

    userRef.set({
      questions: progress
    });
  }, [progress, quizName, uid]);

  return (
    <div className="answer__list">
      {answers.map((answer, i) => (
        <div className="answer-container" key={uuid()}>
          <input
            key={answer.id}
            type={
              questions[qIndex].multipleAnswers ||
              questions[qIndex].multipleAnswers
                ? 'checkbox'
                : 'radio'
            }
            id={answer.answer}
            onChange={() =>
              findFeedback(answer.isCorrect, qIndex, i, progress[qIndex].id)
            }
            checked={answer.checked}
            disabled={
              answer.checked ||
              progress[qIndex].finished ||
              questions[qIndex].finished
            }
          />
          <label className="btn-holder" key={i} htmlFor={answer.answer}>
            {answer.answer}
          </label>
        </div>
      ))}
    </div>
  );
};
