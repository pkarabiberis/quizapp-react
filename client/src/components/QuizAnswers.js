import React from 'react';
import { useSelectedQuizValue, useProgressValue } from '../context';
import { firebase } from '../firebase';
const { uuid } = require('uuidv4');

export const QuizAnswers = ({ answers, qIndex }) => {
  const { questions } = useSelectedQuizValue();
  const { progress, progressDispatch } = useProgressValue();
  let quizName = localStorage.getItem('Quiz');
  const uid = localStorage.getItem('uid');

  const userRef = firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .collection('quizzes')
    .doc(quizName);

  const findFeedback = async (correct, i, answerIndex, id) => {
    await progressDispatch({
      type: 'UPDATE_PROGRESS',
      correct,
      i,
      answerIndex
    });

    userRef.set({
      questions: progress
    });
  };

  return (
    <div className="answer__list">
      {answers.map((answer, i) => (
        <div className="answer-container" key={uuid()}>
          <input
            key={answer.id}
            type={questions[qIndex].multipleAnswers ? 'checkbox' : 'radio'}
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
