import React, { Component } from 'react';
import ReactDOM from 'react-dom';



// DOM events
function Events(props) {
    const clickHandler = console.log;   //shortform, use anytime you havea  function that justt forwards params

    const clickHandler = (syntheticEvent) => {  // React wraps DOM events across browsers in normalized wrapper
        console.log(syntheticEvent);
    }

    return (<button onClick={clickHandler}>Make and event</button>);
}

ReactDOM.render(<Events />, document.getElementById("root"));






// preventDefault
function Nocheckbox() {
    return <input type="checkbox" onClick={(e) => { e.preventDefault(); }} />
}

ReactDOM.render(<Nocheckbox />,
    document.getElementById('root'));





/*
Component vents

 - Domain specific Events - higher abstraction
    Add TextTrackList, etc

Passing function as props, then calling that function

Technique fro passing data out of component,


    */