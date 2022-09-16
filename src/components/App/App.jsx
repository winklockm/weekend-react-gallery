import React from 'react';
import './App.css';

function App() {
    // - Use `axios` to retrieve (`GET`) data 
    //from to `/gallery` and store it in `App.jsx`.
  
    // write import axios from 'axios' at top of page
    // make HTTP GET to /gallery
    // response should be array of images
    // use a function to update the react state
    // with the data the server sent back --> 
    // NO SERVER SO SKIP
    // display it on the DOM with .map ???

    axios.get
  
  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/happyboy.png"/>
      </div>
    );
}

export default App;
