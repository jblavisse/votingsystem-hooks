import './App.css';
import Question from './components/Question';
import React, { useState } from 'react'


function App() {
  const [questions, setQuestions] = useState([
    {
      id:1,
      title: "Who let's the dog out?",
      answers: [
        {id:1, name: "Yes", count: 12},
        {id:2, name: "No", count: 7},
        {id:3, name: "OSEF", count: 23},
      ]
    },
    {
      id:2,
      title: "Tu veux voir mon beats?",
      answers: [
        {id:1, name: "Vrai", count: 12},
        {id:2, name: "Faux", count: 21}
      ]
    }, 
    {
      id:3,
      title: "Quel est l'âge du capitaine?",
      answers: [
        {id:1,name: "A", count: 9},
        {id:2, name: "B", count:11},
        {id:3, name: "C", count: 72},
        {id:4, name: "D", count: 5}
      ]
    }
  ]) 

  const changeQuestion = (newQuestion) => {

    const tmpQuestions = [...questions];
    const newQuestionId = tmpQuestions.findIndex(
        question => question.id === newQuestion.id);

    tmpQuestions[newQuestionId] = newQuestion;
    setQuestions(tmpQuestions);

  }

  return (
    <div className="App container">
      {questions.map(question => {
          return <Question key={question.id} data={question}
            changeQuestion={changeQuestion} />
      })}
    </div>
  );
}

export default App;
