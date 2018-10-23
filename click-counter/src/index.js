import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';
// let model = {
//     clicks: 0
// };

// tell React to re-render the dom when data changes, to do that
// put in render function??? and call it from onClick
// system for managment state changes, routing

// the return value from a function sis jsx markup language that react compiles to js
// function render() {
//     ReactDOM.render(    // updates virtual dom, framewokr updates the real DOM in most efficient way possible
//         <App
//             clicks={model.clicks}
//             onClick={() => { model.clicks += 1; render() }}></App>,
//         document.getElementById('root'));    
// }

// render();


const authors = [
  {
    name: "Mark Twain",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Twain1909.jpg/467px-Twain1909.jpg", // 'images/authors/marktwain.jpg',
    imageSource: "Wikimedia Commons",
    books: [
      "The Adventures of Huckleberry Finn",
      "Life on the Mississippi",
      "Roughing It"
    ]
  },
  {
    name: "Joseph Conrad",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Joseph_Conrad%2C_Fotografie_von_George_Charles_Beresford%2C_1904.jpg/346px-Joseph_Conrad%2C_Fotografie_von_George_Charles_Beresford%2C_1904.jpg", // 'images/authors/marktwain.jpg',
    imageSource: "Wikimedia Commons",
    books: ["Heart of Darkness", "Heart of Darkness2", "Heart of Darkness3"]
  },
  {
    name: "J.K Rowling",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/J._K._Rowling_04-2010.jpg", 
    imageSource: "Wikimedia Commons",
    books: [
      "Harry Potter 1",
      "Harry Potter 2",
      "Harry Potter 3"
    ]
  }
];

const state = {
    // turnData: {
    //     author: authors[2],
    //     books: authors[2].books
    // }
    turnData: getTurnData(authors),
    highlight: ''
}

function getTurnData(authors) {
    const allBooks = authors.reduce(function (p, c, i) {
        return p.concat(c.books);
    }, [])

    const fourBooks = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourBooks);

    return {
        books: fourBooks,
        author: authors.find((author) =>
            author.books.some((title) =>
            title === answer))
    }
}

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.books.some((book) => book === answer)
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}

function render() {
    // spread operator syntax to expand teh state object out into its properties,
    // so the prop received by the AuthorQuiz component will actually be turnData
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />, document.getElementById("root"));
}

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
