import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="Question">
      <h1>How React work</h1>
      <p>
        A team of Facebook developers discovered that the DOM is slow while
        developing client-side apps (The Document Object Model (DOM) is an
        application programming interface (API) for HTML and XML documents. It
        specifies the logical structure of documents as well as how they are
        accessed and manipulated.) To speed things up, React creates a virtual
        DOM, which is essentially a DOM tree representation in JavaScript. As a
        result, when it wants to read or write to the DOM, it will use its
        virtual representation. The virtual DOM will then attempt to discover
        the most effective method of updating the browser's DOM. React elements,
        unlike browser DOM elements, are simple objects that are inexpensive to
        construct. React DOM is in charge of updating the DOM.
      </p>
      <h1>What are the differences between props and state</h1>
      <p>
        1. Props are read-only. State changes can be asynchronous. 2. Props are
        immutable. State is mutable. 3. Props allow you to pass data from one
        component to other components as an argument. State holds information
        about the components. 4. Props can be accessed by the child component.
        State cannot be accessed by child components. 5. Props are used to
        communicate between components. States can be used for rendering dynamic
        changes with the component. 6. Stateless component can have Props.
        Stateless components cannot have State. 7. Props make components
        reusable. State cannot make components reusable. 8. Props are external
        and controlled by whatever renders the component. The State is internal
        and controlled by the React Component itself.
      </p>
      <h1>How does useState work?</h1>
      <p>
        useState is a Hook that enables state variables in functional elements.
        You supply the initial condition to this function, and it returns a
        variable with the present state value (that might or might not be the
        initial state) and then another function to modify this value.
      </p>
    </div>
  );
};

export default Question;
