import { useState, useEffect } from 'react';
import quizData from '../quizzes.json';

export const useQuiz = () => {
	const initialState = quizData;
	const [quizzes, setQuizzes] = useState(initialState);

	useEffect(() => {
		//DB fetching logic here
	});
	return [quizzes, setQuizzes];
};
