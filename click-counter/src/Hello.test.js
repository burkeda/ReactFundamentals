import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";   //used to perform shallow rendering of react comp
import Adapter from "enzyme-adapter-react-16";





// think of the props as a model
// return value is jsx, react transpiles into js using some compiler
function Hello(props) {
    return <h1>Hello at {props.now}</h1>;
}

const moment = new Date(15889464000);

describe("When setting up testing", () => { 
    let result;

    beforeAll(() => {
        result = Hello({ now: moment.toISOString() });
    });

    it("return a value", () => { 
        expect(result).not.toBeNull();
    });

    it("is a H1", () => {
        expect(result.type).toBe("h1");
    });

    it("has children", () => {
      expect(result.props.children).toBeTruthy();
    });
});

describe("When testing with ReactDOM", () => {
    
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Hello now={moment.toISOString()} />, div);
    });

    // it("is a H1", () => {
    //     expect(result.type).toBe("h1");
    // });

    // it("has children", () => {
    //     expect(result.props.children).toBeTruthy;
    // });
});

// Enzyme.configure({ adapter: new Adapter() });

// describe("When testing Enzyme", () => {

//     it("renders h1 enzyme", () => {
//         const wrapper = shallow(<Hello now={moment.toISOString()} />);
//         expect(wrapper.find("h1").length).toBe(1);
//     });

//     // it("is a H1", () => {
//     //     expect(result.type).toBe("h1");
//     // });

//     // it("has children", () => {
//     //     expect(result.props.children).toBeTruthy;
//     // });
// });