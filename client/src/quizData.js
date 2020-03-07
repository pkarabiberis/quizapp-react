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
    multipleAnswers: false,
    attemps: 3,
    finished: false,
    answers: [
      {
        id: uuid(),
        answer: 'I dont know.',
        isCorrect: false,
        checked: false
      },
      {
        id: uuid(),
        answer: 'I really dont know.',
        isCorrect: false,
        checked: false
      },
      {
        id: uuid(),
        answer: 'I actually dont know.',
        isCorrect: true,
        checked: false
      },
      {
        id: uuid(),
        answer: 'I actually donasd know.',
        isCorrect: false,
        checked: false
      }
    ]
  },
  {
    id: uuid(),
    question: 'What is an object?',
    quizName: 'Javascript OOP',
    feedback: '',
    multipleAnswers: true,
    attemps: 3,
    finished: false,
    answers: [
      {
        id: uuid(),
        answer: 'Trust me, I dont know.',
        isCorrect: false,
        checked: false
      },
      {
        id: uuid(),
        answer: 'Stop asking shit',
        isCorrect: false,
        checked: false
      },
      {
        id: uuid(),
        answer: 'I actually really dont know.',
        isCorrect: false,
        checked: false
      },
      {
        id: uuid(),
        answer: 'TEEST.',
        isCorrect: true,
        checked: false
      },
      {
        id: uuid(),
        answer: 'TEEST2.',
        isCorrect: true,
        checked: false
      }
    ]
  },
  {
    id: uuid(),
    question: 'Is C# a good language?',
    quizName: 'C# OOP',
    feedback: '',
    multipleAnswers: false,
    attemps: 3,
    finished: false,
    answers: [
      {
        id: uuid(),
        answer: 'Yes',
        isCorrect: false,
        checked: false
      },
      {
        id: uuid(),
        answer: 'No',
        isCorrect: false,
        checked: false
      },
      {
        id: uuid(),
        answer: 'IDK.',
        isCorrect: true,
        checked: false
      }
    ]
  }
];
