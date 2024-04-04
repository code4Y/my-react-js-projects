import { useEffect, useMemo, useState } from 'react';
import './App.css'
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        { text: "Phone", correct: false },
        { text: "Watches", correct: true },
        { text: "Food", correct: false },
        { text: "Cosmetic", correct: false },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        { text: "2004", correct: true },
        { text: "2005", correct: false },
        { text: "2006", correct: false },
        { text: "2007", correct: false },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        { text: "Johnny Deep", correct: false },
        { text: "Leonardo Di Caprio", correct: false },
        { text: "Denzel Washington", correct: false },
        { text: "Daniel Red Cliff", correct: true },
      ],
    },
    {
      id: 4,
      question: "Which language is used for web apps?",
      answers: [
        { text: "PHP", correct: true },
        { text: "Python", correct: false },
        { text: "Java", correct: false },
        { text: "All", correct: false },
      ],
    },
    {
      id: 5,
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheet", correct: true },
        { text: "Color and Style Sheets", correct: false },
        { text: "Cascading Style Single", correct: false },
        { text: "Cascading Style Sheets", correct: false },
      ],
    },
    {
      id: 6,
      question: "The C programming language was created by this American computer scientist. ",
      answers: [
        { text: "Willis Ware", correct: false },
        { text: "Dennis Ritchie", correct: true },
        { text: "Willis Ware", correct: false },
        { text: "Floyd Steele", correct: false },
      ],
    },
    {
      id: 7,
      question: "What is the most preferred language for use in Artificial Intelligence?",
      answers: [
        { text: "Java", correct: false },
        { text: "Python", correct: true },
        { text: "C++", correct: false },
        { text: "JavaScript", correct: false },
      ],
    },
    {
      id: 8,
      question: "Which programming language shares its name with an island in Indonesia?",
      answers: [
        { text: "Python", correct: false },
        { text: "C", correct: false },
        { text: "Java", correct: true },
        { text: "Perl", correct: false },
      ],
    },
    {
      id: 9,
      question: "What language does Node.js use?",
      answers: [
        { text: "JavaScript", correct: true },
        { text: "Java", correct: false },
        { text: "Java Source", correct: false },
        { text: "Joomla Source Code", correct: false },
      ],
    },
    {
      id: 10,
      question: "What is the binary system?",
      answers: [
        { text: "A system with 2 states", correct: true },
        { text: "A system with 4 states", correct: false },
        { text: "A system with 100 states", correct: false },
        { text: "A system with 1000 states", correct: false },
      ],
    },
    {
      id: 11,
      question: "What is the time complexity of searching for an item in a balanced binary search tree?",
      answers: [
        { text: "O(1)", correct: false },
        { text: "O(log n)", correct: true },
        { text: "O(n)", correct: false },
        { text: "O(n log n)", correct: false },
      ],
    },
    {
      id: 12,
      question: "Which of the following sorting algorithms is not stable by default?",
      answers: [
        { text: "Merge Sort", correct: false },
        { text: "Insertion Sort", correct: false },
        { text: "Bubble Sort", correct: false },
        { text: "Quick Sort", correct: true },
      ],
    },
    {
      id: 13,
      question: "In the context of machine learning, what does SVM stand for?",
      answers: [
        { text: "Simple Vector Machine", correct: false },
        { text: "Support Vector Machine", correct: true },
        { text: "Simple Variable Model", correct: false },
        { text: "Support Variable Model", correct: false },
      ],
    },
    {
      id: 14,
      question: "What is the main difference between a process and a thread?",
      answers: [
        { text: "There is no difference", correct: false },
        { text: "A process can contain multiple threads", correct: true },
        { text: "A thread can contain multiple processes", correct: false },
        { text: "A process is a part of a thread", correct: false },
      ],
    },
    {
      id: 15,
      question: "In the context of databases, what does ACID stand for?",
      answers: [
        { text: "Atomicity, Consistency, Isolation, Durability", correct: true },
        { text: "Atomicity, Consistency, Integrity, Durability", correct: false },
        { text: "Atomicity, Consistency, Isolation, Dependability", correct: false },
        { text: "Atomicity, Consistency, Integrity, Dependability", correct: false },
      ],
    },
  ];

  const moneyPyramid = useMemo(() => [
    {id:1, amount:"$ 100"},
    {id:2, amount:"$ 200"},
    {id:3, amount:"$ 300"},
    {id:4, amount:"$ 500"},
    {id:5, amount:"$ 1000"},
    {id:6, amount:"$ 2000"},
    {id:7, amount:"$ 4000"},
    {id:8, amount:"$ 8000"},
    {id:9, amount:"$ 16000"},
    {id:10, amount:"$ 32000"},
    {id:11, amount:"$ 64000"},
    {id:12, amount:"$ 125000"},
    {id:13, amount:"$ 250000"},
    {id:14, amount:"$ 500000"},
    {id:15, amount:"$ 1000000"},
  ].reverse(), []);

  useEffect (() => {
    questionNumber > 1 && 
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="App">
      {username ? (
        <>
          <div className="main">
          {timeOut ? (
            <h1 className="endText">You earned: {earned}</h1>
          ) : (
            <>
              <div className="top">
                <div className="timer">
                  <Timer 
                    setTimeOut={setTimeout}
                    questionNumber={questionNumber}
                  />
                </div>
              </div>
              <div className="bottom">
                <Trivia
                  data={data}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  setTimeOut={setTimeOut}
                />
              </div>
            </>
          )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : <Start setUsername={setUsername} />}
      
    </div>
  );
}

export default App
