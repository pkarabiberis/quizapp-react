import React, { useEffect } from 'react';
import {
  useQuizValue,
  useSelectedQuizValue,
  useProgressValue
} from '../context';
import { QuizQuestions } from './QuizQuestions';
import { firebase } from '../firebase';

export const Quiz = () => {
  const { quizzes, quizDispatch } = useQuizValue();
  const { questions, questionsDispatch } = useSelectedQuizValue();
  const { progress, progressDispatch } = useProgressValue();
  const quizName = localStorage.getItem('Quiz');
  const uid = localStorage.getItem('uid');

  useEffect(() => {
    // Get quiz from DB
    const getQuiz = () => {
      firebase
        .firestore()
        .collection('quizDescriptions')
        .where('name', '==', quizName)
        .get()
        .then(snapshot => {
          let individualQuiz = snapshot.docs.map(quiz => ({
            ...quiz.data(),
            id: quiz.id
          }));

          quizDispatch({
            type: 'GET_INDIVIDUAL_QUIZ',
            quiz: individualQuiz
          });
        });
    };

    // Get questions for quiz from db
    const getQuestions = () => {
      firebase
        .firestore()
        .collection('quizQuestions')
        .where('quizName', '==', quizName)
        .get()
        .then(snapshot => {
          const quizQuestions = snapshot.docs.map(question => ({
            ...question.data(),
            id: question.id
          }));

          if (JSON.stringify(quizQuestions) !== JSON.stringify(questions)) {
            questionsDispatch({
              type: 'GET_QUESTIONS',
              questions: quizQuestions
            });
          }
        });

      let userRef = firebase
        .firestore()
        .collection('users')
        .doc(uid)
        .collection('quizzes')
        .doc(quizName);

      //  Check if quiz is in progress
      //  If progress not found, save doc in database
      //  If progress found, use it

      userRef.get().then(doc => {
        if (!doc.exists) {
          firebase
            .firestore()
            .collection('quizQuestions')
            .where('quizName', '==', quizName)
            .get()
            .then(snapshot => {
              const testQuestions = snapshot.docs.map(question => ({
                ...question.data(),
                id: question.id
              }));

              progressDispatch({
                type: 'SET_PROGRESS',
                questions: testQuestions
              });
              userRef.set({
                questions: testQuestions
              });
            });
        } else {
          progressDispatch({
            type: 'FETCH_PROGRESS',
            progress: doc.data().questions
          });
        }
      });
    };
    document.title = `${quizName} || QuizApp`;
    getQuiz();
    getQuestions();

    return () => {
      console.log('unmounted');
    };
  }, [quizName, questions, uid]);

  return (
    <div className="text-center mt-5">
      {quizzes && <h1>{quizzes.name}</h1>}
      {!progress
        ? questions.map((question, i) => (
            <QuizQuestions
              key={question.id}
              index={i}
              question={question}
              answers={question.answers}
            />
          ))
        : progress.map((question, i) => (
            <QuizQuestions
              key={question.id}
              index={i}
              question={question}
              answers={question.answers}
            />
          ))}
    </div>
  );
};
