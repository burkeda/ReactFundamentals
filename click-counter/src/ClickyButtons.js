import React, { Component } from 'react';
import ReactDOM from 'react-dom';




// Props in JSX - Example of a prop as a function.  Pass function in as prop, then 
// call that function as a way of getting data back out.
// To use props to pass data out of the component, specify a function as the prop, pass it in
// and call that function in.  Pass the data as the function arguments.
//
// The Clicker component has a single prop handleClick, which is a function.
//  Its renders 3 buttons, each has a click handler setup to call the handleClick prop
// 
function Clicker({ handleClick }) {

    return <div>
        <button onClick={(e) => { handleClick('A'); }}> A </button>
        <button onClick={(e) => { handleClick('B'); }}> B </button>
        <button onClick={(e) => { handleClick('C'); }}> C </button>
    </div>
}
 
// const el = <Clicker handleClick={(l) => {log(l); }} />;

// When the app is rendered the handleCLick prop is defined as a function,
// that receives a letter and logs that letter to the console
ReactDOM.render(<Clicker handleClick={(letter) => { console.log(`${letter} clicked`); }} />,
    document.getElementById('root'));




// Another example of prop as function, then data passed out
// through function reference
function ClickyButtons({ numberOfButtons, onSelection}) {
    const makeButton = v => <button key={v} id={v}
        onClick={event => onSelection(event.target.id)}>{v}</button>;
    
    return <div>
        {_.range(1,numberOfButtons + 1 ).map(makeButton)}
    </div>
}

ReactDOM.render(<ClickyButtons numberOfButtons={99} onSelection={console.log} />,
    document.getElementById('root')
);






// Unescaping content(not encoded)
// 1st brackets are
// 2nd brackets are standard js object literal brackets
// UC is content that is not encoded for cross site scripting attacks.
// Not in this example, but in gerneral React will escape all contentby default.
// Avoid of course.
// Requires __html=
<div dangerouslySetInnerHTML={{__html="<p>foo</p>"}} /> // tells react not to escape




function DangerContainer() { 
    return <pdangerous="" 
}

















