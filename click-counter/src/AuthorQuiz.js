import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import "./bootstrap.css";
// import './Hello'





function Hero() {
  return <div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>
        Author Quiz
      </h1>
      <p>Select the book written by the author shown</p>
    </div>
  </div>
}

// photo of author and books
function Turn({ author, books, highlight, onAnswerSelected }) {
  
  function highlightToBgColor(highlight) {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };
    return mapping[highlight];
  }

  return <div className="row turn" style={{ backgroundColor: highlightToBgColor(highlight) }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
      {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}  {/* convert the DOM event onCLick to  component event onAnswerSelected */ }
      </div>
    </div>;
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),

  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
}

function Book({ title, onClick }) {
  return <div className="answer" onClick={() => {onClick(title)}}>
    <h4>{title}</h4>
  </div>
}

function Continue() {
  return null;
}

function Footer() {
  return <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">All images are from <a href="http://commons.wikimedia.org/wiki"></a></p>
      </div>
    </div>;
}

// think of the props as a model
// es6 class, 
// props passed in by parent
// state is in component, mutable data, avoid when possible, only in class
//  always call setState so react will re-render.  Avoid class comps and state when possible???
//  set state always merges new state with old.  All prev state remains unless overwritten,
//  the calls are batched and no guarantee they occur immediately
// class AuthorQuiz extends Component {
//   render() {
//     return <div className="container-fluid">
//       <Hero />
//       <Turn />
//       <Continue />
//       <Footer />
//     </div>;
//   }
// }


function AuthorQuiz({ turnData, highlight, onAnswerSelected }) {
    return <div className="container-fluid">
        <Hero />
        <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} /> {/* // spread opertaor, which means the props receives turnData: author and books */}
        <Continue />
        <Footer />
      </div>;
}
    
export default AuthorQuiz;



