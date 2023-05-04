import React from 'react';
import logo from './logo.svg';
import './App.css';
import ModalExample from './Modal/Modal';
import CollapsibleExample from './Collapsible/Collapsible';
import Background from './Background/Background';
import Get from './GetRequest/Get';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {


  const intialColor = document.body.style.backgroundColor;
  const params = new URLSearchParams(window.location.search);
  const bgColor = params.get('bg');

  useEffect(() => {
    if (bgColor) document.body.style.backgroundColor = bgColor;
    console.log(`background color: ${bgColor}`);

    return () => {
      document.body.style.backgroundColor = intialColor;
    }

  }, []);
  
  return (
    <div className="buttons">
      <p>Button 1:</p> <ModalExample />
      <p>Button 2:</p> <CollapsibleExample />
      <p>Button 3:</p> <Background />
      <p>Button 4:</p> <Get />
      
    </div>
  );
}

export default App;
