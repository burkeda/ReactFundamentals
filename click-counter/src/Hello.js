import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// think of the props as a model
// return value is jsx, react transpiles into js using some compiler
function Hello(props) {
  return <h1>Hello at {props.now}</h1>; 
}

// ReactDOM.render(
//   <Hello now={new Date().toISOString()} />,
//   document.getElementById('root')
// );

// export default Hello;



