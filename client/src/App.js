import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { QuizList } from './components/QuizList';
import { QuizProvider, SelectedQuizProvider } from './context';
import { Header } from './components/layout/Header';
import { Quiz } from './components/Quiz';

export const App = () => {
  return (
    <SelectedQuizProvider>
      <QuizProvider>
        <BrowserRouter>
          <Header />
          <div className="App">
            <Route exact path="/" component={QuizList} />
            <Route path="/quiz/:id" component={Quiz} />
          </div>
        </BrowserRouter>
      </QuizProvider>
    </SelectedQuizProvider>
  );
};
