import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="contact Manager"/>
      <div className="container">
        <h1>&nbsp;</h1>
        <Contact name="shubhro Gupta" email="hi@shubhro.in" number = "911"/>
        <Contact name="siris Gupta" email="hi@siris.in" number = "911"/>
        <Contact name="hehe" email="hi@hehe.in" number = "911"/>
        <Contact name="maa" email="hi@maaa.in" number = "6969"/>
        <Contact name="lax xya" email="hi@lakshaya.in" number = "420s"/>        
      </div>
      
    </div>
  );
}

export default App;
