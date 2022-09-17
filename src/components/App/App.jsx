// STEP 4️ & 5
import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
// STEP 1
import axios from 'axios'
// STEP 2 from GalleryList.jsx
import GalleryList from '../GalleryList/GalleryList.jsx';

// GOALS:
// ✅ 1. Use `axios` to retrieve (`GET`) data from `/gallery`
// ✅ 2. Store that data in `App.jsx`.
// STEPS:
// ✅ 1. import axios at top of page to make the GET work
// ✅ 2. make HTTP GET to /gallery
// ✅ 3. response should be an object containing (at .data) an array of images
// ✅ 4. import useEffect and run the function with the GET 
//       request when the page loads
// ✅ 5. import useState and use a function to update the react state with the 
//       data sent back (array of images)

function App() {
  // STEP 4
  useEffect(() => {
    getData();
  }, [])
  // STEP 5
  const [gallery, setGallery] = useState([]);
  // STEP 2
  const getData = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      // STEP 3
      console.log(response);
      // STEP 5
      setGallery(response.data);
    }).catch((error) => {
      console.log('getData not working due to:', error);
    })
  }
  // confirming that STEP 5 is the array:
  console.log('this is the gallery variable:', gallery);




  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* STEP 3 from GalleryList.jsx */}
        <GalleryList gallery={gallery} getData={getData}/>
      </div>
    );
}

export default App;
