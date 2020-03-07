import React, { useEffect } from 'react';
import { useSelectedQuizValue } from '../context';

const { uuid } = require('uuidv4');

export const QuizAnswers = ({ answers, qIndex }) => {
  const { questions, questionsDispatch } = useSelectedQuizValue();
  const findFeedback = (correct, i, answerIndex) => {
    questionsDispatch({
      type: 'SET_FEEDBACK',
      correct,
      i,
      answerIndex
    });
  };

  useEffect(() => {
    questionsDispatch({
      type: 'FETCH_PROGRESS'
    });
  });

  return (
    <div className="answer__list">
      {answers.map((answer, i) => (
        <div className="answer-container" key={uuid()}>
          <input
            key={answer.id}
            type={questions[qIndex].multipleAnswers ? 'checkbox' : 'radio'}
            id={answer.answer}
            onChange={() => findFeedback(answer.isCorrect, qIndex, i)}
            checked={answer.checked}
            disabled={answer.checked || questions[qIndex].finished}
          />
          <label className="btn-holder" key={i} htmlFor={answer.answer}>
            {answer.answer}
          </label>
        </div>
      ))}
    </div>
  );
};
