const { uuid } = require('uuidv4');

export const quizDescriptions = [
  {
    id: uuid(),
    name: 'Javascript OOP',
    description: 'Questions about Javascript'
  },
  {
    id: uuid(),
    name: 'C# OOP',
    description: 'Questions about C#'
  },
  {
    id: uuid(),
    name: 'C++ OOP',
    description: 'Questions about C++'
  },
  {
    id: uuid(),
    name: 'Python OOP',
    description: 'Questions about Python'
  }
];

export const quizQuestions = [
  {
    id: uuid(),
    question: 'What is an array?',
    quizName: 'Javascript OOP',
    feedback: '',
    answers: [
      {
        answer: 'I dont know.',
        isCorrect: false
      },
      {
        answer: 'I really dont know.',
        isCorrect: false
      },
      {
        answer: 'I actually dont know.',
        isCorrect: true
      }
    ]
  },
  {
    id: uuid(),
    question: 'What is an object?',
    quizName: 'Javascript OOP',
    feedback: '',
    answers: [
      {
        answer: 'Trust me, I dont know.',
        isCorrect: false
      },
      {
        answer: 'Stop asking shit',
        isCorrect: false
      },
      {
        answer: 'I actually really dont know.',
        isCorrect: true
      }
    ]
  },
  {
    id: uuid(),
    question: 'Is C# a good language?',
    quizName: 'C# OOP',
    feedback: '',
    answers: [
      {
        answer: 'Yes',
        isCorrect: false
      },
      {
        answer: 'No',
        isCorrect: false
      },
      {
        answer: 'IDK.',
        isCorrect: true
      }
    ]
  }
];
