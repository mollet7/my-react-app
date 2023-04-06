import React from 'react';
import ReactDOM from 'react-dom';
import Room from './Room.js';







const x = 9;

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);
ReactDOM.render(myelement, document.getElementById('root'));

const sectionOne = (
  <>
    <p>I am a paragrapht</p>
    <p>I am a paragraph too</p>
    <p>The sum of 5 and 5 is {5 + 5}</p>
  
  <input type = "text" />
  <p>{(x) < 10 ? "Hello" : "Goodbye"}</p>
  </>
);

ReactDOM.render(sectionOne, document.getElementById('para1'));

//React Component.
//Functional Component.
function Car(props){
  return <h2>HI, I am a {props.color} Car!</h2>;

}

const root = ReactDOM.createRoot(document.getElementById('comp1'));
root.render(<Car color="red"/>);

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}
const root2 = ReactDOM.createRoot(document.getElementById('comp2'));
root2.render(<Garage />);

// Using component defined from file
const root3 = ReactDOM.createRoot(document.getElementById('compFromFile'));
root3.render(<Room />);
