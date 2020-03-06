import React from 'react';

export const QuizAnswers = ({ answers }) => {
  return (
    <div>
      {answers.map((a, i) => (
        <>
          <input className="m-3" key={a.id} id="test" type="radio" />
          <label className="m-1" htmlFor="test">
            {a.answer}
          </label>
        </>
      ))}
    </div>
  );
};
