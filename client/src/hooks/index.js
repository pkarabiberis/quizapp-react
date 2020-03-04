import { useState, useEffect } from 'react';

export const useQuiz = () => {
	const initialState = [
		{
			id: 1,
			name: 'Javascript OOP',
			description: 'Questions about Javascript'
		},
		{ id: 2, name: 'C#', description: 'Questions about C#' }
	];

	const [quizzes, setQuizzes] = useState(initialState);

	useEffect(() => {
		console.log(`useEffect ran`, quizzes);
	});

	return [quizzes, setQuizzes];
};
