import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuizValue } from '../context';
export const Quiz = props => {
	const { quizzes } = useQuizValue();
	let { id } = useParams();
	id = +id;

	let quiz = quizzes.find(quiz => quiz.id === id);
	console.log(quiz);
	return (
		<div className="text-center mt-5">
			<h1>{quiz.name}</h1>
		</div>
	);
};
