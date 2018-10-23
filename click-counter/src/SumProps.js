import React, { Component } from 'react';
import PropTypes from 'prop-types'




    
// as in sum example, we can use proprTypes to validate the incoming data
// js will convert that 2 to string 2 and output a2
function Sum(props) {
    return <h1>
        { props.a } + { props.b } = { props.a + props.b }
    </h1>;
}

Sum.propTypes = {
    a: PropTypes.number.isRequired,     // runtime validation, wont prevent error from ocurring
    b: PropTypes.number.isRequired
}

ReactDOM.render(<Sum a={"a"} b = {2} />, document.getElementById('root'));  // results in console error on 'a' expected number got string



// Spread Attributes
const props = { a: 4, b: 2 };
const element = <Sum { ...props } />;


// // TypeScript has compile time validation like this
// interface SumProps {
//     a: number;
//     b: number;
// }
// function Sum(props: SumProps) {
//     return (
//         <h1>
//         { props.a } + { props.b } = { props.a + props.b }
//         < /h1>
//   );
// }








