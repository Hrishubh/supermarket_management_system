import "./App.css";
// import Header from './Components/Header.js';
// import Footer from './Components/Footer.js';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Main from './Components/Main.js'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}

        <Main />

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;