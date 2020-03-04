import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuizValue } from '../context';
import { QuizQuestions } from './QuizQuestions';

export const Quiz = () => {
	const { quizzes } = useQuizValue();
	let { id } = useParams();
	id = +id;
	let quiz = quizzes.find(quiz => quiz.id === id);

	return (
		<div className="text-center mt-5">
			<h1>{quiz.name}</h1>
			<QuizQuestions quiz={quiz} />
		</div>
	);
};
