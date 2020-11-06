import React, {useState} from 'react';
import  './cardMusic.css';


function flip(event){

    const transform =  transform='rotate(180deg)'
	var element = event.currentTarget;
	if (element.className === "card") {
    if(element.style.transform === "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};
const cardMusic = () => {
  return (
    <>
<div class="container">
  <div class="card" onclick={flip(event)}>
    <div class="front">
      <h1>This is the front</h1>
      <p> Here is some additional text</p>
    </div>
    <div class="back">
      <h1>This is the back</h1>
    </div>
  </div>
</div>
    </>

  )
}

export default cardMusic;