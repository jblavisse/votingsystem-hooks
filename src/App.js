import './App.css';
import Question from './components/Question';
import React, { useState } from 'react'


function App() {
  const [questions, setQuestions] = useState([
    {
      id:1,
      title: "Who let's the dog out?",
      answers: [
        {number:1, name: "Yes", count: 12},
        {number:2, name: "No", count: 7},
        {number:3, name: "OSEF", count: 23},
      ]
    },
    {
      id:2,
      title: "Tu veux voir mon beats?",
      answers: [
        {number:1, name: "Vrai", count: 12},
        {number:2, name: "Faux", count: 21}
      ]
    }, 
    {
      id:3,
      title: "Quel est l'âge du capitaine?",
      answers: [
        {number:1,name: "A", count: 9},
        {number:2, name: "B", count:11},
        {number:3, name: "C", count: 72},
        {number:4, name: "D", count: 5}
      ]
    }, 
    {
      id:4,
      title: "Pour tester",
      answers: [
        {number:1,name: "A", count: 9},
        {number:2, name: "B", count:11},
        {number:3, name: "C", count: 72},
        {number:4, name: "D", count: 5}
      ]
    }
  ]) 

  return (
    <div className="App container">
      {questions.map(question => {
          return <Question key={question.id} data={question} />
      })}
    </div>
  );
}

export default App;
