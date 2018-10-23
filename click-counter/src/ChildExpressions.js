import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


// props.children


function ConditionalDisplay(props) {
    return <div>
        {props.isVisible ? props.childre : null}
    </div>;
}

ConditionalDisplay.propTypes = {
    isVisible: PropTypes.bool.isRequired
};

const state = {
    showSum: true
};


function Sum(props) {
    return <h1>
        {props.a} + {props.b} = {props.a + props.b}
    </h1>;
}


function render() {
    ReactDOM.render(<ConditionalDisplay isVisible={state.showSum}>
        <h1>A <span>Sum</span></h1>
        <Sum a={4} b={3}></Sum>
    </ConditionalDisplay>,
        document.getElementById('root'));
}

setInterval(() => {
    state.showSum = !state.showSum;
    render();
}, 2000);