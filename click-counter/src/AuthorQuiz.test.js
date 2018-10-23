import React from 'react';
import ReactDOM from "react-dom";
import AuthorQuiz from "./AuthorQuiz";
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Jest testing framework, another facebook project

const state = {
  turnData: {
    author: {
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
    books: [
      "The Adventures of Huckleberry Finn",
      "Heart of Darkness",
      "Harry Potter 1"
    ]
  },
  highlight: "wrong"
};



describe("Author quiz", () => {
  // let result;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => { }} />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });

  // beforeAll(() => {
  //   result = Hello({ now: moment.toISOString() });
  // });

  // it("return a value", () => {
  //   expect(result).not.toBeNull();
  // });

  // it("is a H1", () => {
  //   expect(result.type).toBe("h1");
  // });

  // it("has children", () => {
  //   expect(result.props.children).toBeTruthy();
  // });

  describe("When no answer was selected", () => {
    let wrapper;
    beforeAll(() => {
      // wrapper is Enzyme
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => { }} />);
    });

    it('should have no background color', () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
      });
    });


    
  describe("When first answer is selected", () => {
    let wrapper;
    const handleAnswerSelected = jest.fn();     //creates mock function

    beforeAll(() => {
      // wrapper is Enzyme
      wrapper = mount(
        <AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected} />
      );
      wrapper.find('.answer').first().simulate('click');
    });

    it("onAnswerSelected should be called", () => {
      expect(handleAnswerSelected).toHaveBeenCalled();
    });

    it("onAnswerSelected should receive The Adventures of Huckleberry Finn", () => {
      expect(handleAnswerSelected).toHaveBeenCalledWith("The Adventures of Huckleberry Finn");
    });




  });
});

