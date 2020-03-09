import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { QuizList } from './components/QuizList';
import {
  QuizProvider,
  SelectedQuizProvider,
  ProgressProvider
} from './context';
import { Header } from './components/layout/Header';
import { Quiz } from './components/Quiz';

export const App = () => {
  return (
    <SelectedQuizProvider>
      <QuizProvider>
        <ProgressProvider>
          <BrowserRouter>
            <Header />
            <div className="App">
              <Route exact path="/" component={QuizList} />
              <Route path="/quiz/:id" component={Quiz} />
            </div>
          </BrowserRouter>
        </ProgressProvider>
      </QuizProvider>
    </SelectedQuizProvider>
  );
};
