import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { QuizList } from './components/QuizList';
import {
  QuizProvider,
  SelectedQuizProvider,
  ProgressProvider,
  UserProvider
} from './context';
import Header from './components/layout/Header';
import { Quiz } from './components/Quiz';
import { Register } from './components/Register';
import { Login } from './components/Login';

export const App = () => {
  return (
    <ProgressProvider>
      <UserProvider>
        <SelectedQuizProvider>
          <QuizProvider>
            <BrowserRouter>
              <Header />
              <div className="App">
                <Route exact path="/quizzes" component={QuizList} />
                <Route path="/quiz/:id" component={Quiz} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
              </div>
            </BrowserRouter>
          </QuizProvider>
        </SelectedQuizProvider>
      </UserProvider>
    </ProgressProvider>
  );
};
