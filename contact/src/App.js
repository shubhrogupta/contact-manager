import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="contact Manager"/>
      <div className="container">
        <h1>&nbsp;</h1>
        <Contact name="shubhro Gupta" mail="hi@shubhro.in" number = "911"/>
        <Contact name="siris Gupta" mail="hi@siris.in" number = "911"/>
        <Contact name="bhavya Mathur" mail="hi@bhavya.in" number = "911"/>
      </div>
      
    </div>
  );
}

export default App;
