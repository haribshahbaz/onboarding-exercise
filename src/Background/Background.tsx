import {Button} from '@shopify/polaris';
import React, { useState } from 'react';
import './Background.css'

function Background() {
  const [dafaultColor, setDefaultColor] = useState("#f0f0f0");

  function changeBackground(){
    const rando = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + rando;
  }

  function revertBackground(){
    document.body.style.backgroundColor = dafaultColor;
  }

  return (
    <div className="background">
      <Button onClick={changeBackground}>Change Background</Button>
      <Button onClick={revertBackground}>Revert Background</Button> 
    </div>

  );
}

export default Background;