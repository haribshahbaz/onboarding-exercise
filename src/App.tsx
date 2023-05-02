import React from 'react';
import logo from './logo.svg';
import './App.css';
import ModalExample from './Modal/Modal';
import CollapsibleExample from './Collapsible/Collapsible';
import Background from './Background/Background';

function App() {
  return (
   <div className="buttons"> 
      <p>Button 1:</p> <ModalExample /> 
      <p>Button 2:</p> <CollapsibleExample />
      <p>Button 3:</p> <Background />
   </div>
  );
}

export default App;
