import React, { useState } from "react";
import './cane.png';

export default function Cane({onMouseMOve}) {
    const [active, setActive] = useState(false);
    const [resisting, setResisting] = useState(false);
    const [visibleV, setVisibleV] = useState(false);

  const handleClick = () => {
    setActive(active ? active : !active);
  };
  const handleButtonClick = (e) => {
    setResisting(resisting ? resisting : !resisting)
    e.style={color: "red"}
    console.log("has resisted")
  }
  const handleButtonHover = () => {
    setVisibleV(visibleV ? visibleV : !visibleV)
    
    console.log("has resisted")
  }

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    e.style={left: x + 'px'}
    e.style={top: y + 'px'}
    var rotation = (x / 2) * 0.7;
    // Update the transform property with the new rotation value scale(0.1)
    e.style.transform = "translate(-85px, 10px) rotate(" + rotation + "deg) scale(0.5)";
  }
    return <div className="Cane">
        {/* {<p onMouseOver={() => handleClick()} style={{ color: active ? "black" : "white" }}>{item.word}</p>
        : (item.word.trim() == "refuse" ? <button style={{ visibility: visibleV ? "hidden" : "visible", color: resisting ? "red" : "black"}} onMouseOver={() => handleButtonHover()} onFocus={(e) => handleButtonClick(e)}onClick={(e) => handleButtonHover()}>refuse</button>
        : <a onMouseOver={() => handleClick()} href="https://ohrtann19.github.io/errorfail/">no way out</a>)} */}
        
        {<img onMouseMove={(e) => handleMouseMove(e)} src="cane.png" id="cane" alt="image of a white cane" />}
    </div>
}


const collisionSound = document.getElementById('collision-sound');

const text = document.querySelector('.text');
const follower = document.getElementById('cane');

const synth = window.speechSynthesis;

let collided = false;

function playSound() {
    const utterance = new SpeechSynthesisUtterance(text.textContent);
    synth.speak(utterance);
}

setInterval(() => {
    if (collided) {
    playSound();
    collided = false;
    }
}, 100);

let startTime = null;
let startPosition = null;

// text.addEventListener('mouseover', (event) => {
//   // Get the positions and dimensions of the cane and text elements
//   const followerRect = cane.getBoundingClientRect();
//   const textRect = text.getBoundingClientRect();

//   // Check if the elements are colliding
//   if (followerRect.right > textRect.left && followerRect.left < textRect.right && followerRect.bottom > textRect.top && followerRect.top < textRect.bottom) {
//     // If the elements are colliding, play the sound
//     collided = true
//   }
// })

document.addEventListener('mousemove', (event) => {
  
  
//   const followerRect = follower.getBoundingClientRect();
//   const textRect = text.getBoundingClientRect();

  
    
//       const angle = distance / (textRect.width / 2) * 45;
//       cane.style.transform = `translate(-85px, 10px) rotate(${angle}deg) scale(0.5)`;

// let rotateInterval;

// 		// Set the initial rotation angle
// 		let angle = 0;

// 		// Define the angle increment and time delay
// 		const increment = 90;
// 		const delay = 2000;

// 		// Define the function to rotate the cane
// 		const rotateCane = () => {
// 			cane.style.transform = `translate(-85px, 10px) rotate(${angle}deg) scale(0.5)`;
// 			angle += increment;

// 			// If the angle is greater than 360, reset it to 0
// 			if (angle >= 360) {
// 				angle = 0;
// 			}
// 		};

// 		// Start the rotation interval
// 		rotateInterval = setInterval(rotateCane, delay);

// 		// Stop the rotation interval when the mouse is over the cane
// 		cane.addEventListener('mouseenter', () => {
// 			clearInterval(rotateInterval);
// 		});

// 		// Start the rotation interval again when the mouse leaves the cane
// 		cane.addEventListener('mouseleave', () => {
// 			rotateInterval = setInterval(rotateCane, delay);
// 		})
   
      
    //   function isColliding(element1, element2) {
    //   const rect1 = element1.getBoundingClientRect();
    //   const rect2 = element2.getBoundingClientRect();

    //   return !(
    //     rect1.right < rect2.left || 
    //     rect1.left > rect2.right || 
    //     rect1.bottom < rect2.top || 
    //     rect1.top > rect2.bottom
    //   );
    // }
  // Calculate the angle of rotation based on the mouse position
  var rotation = (x / 2) * 0.7;

  // Update the transform property with the new rotation value scale(0.1)
  follower.style.transform = "translate(-85px, 10px) rotate(" + rotation + "deg) scale(0.5)";

//     // Check for collision with text element
  
//   if (followerRect.right > textRect.left && followerRect.left < textRect.right && followerRect.bottom > textRect.top && followerRect.top < textRect.bottom) {
//     // Stop the movement of the cane
//     // follower.style.transform = "translate(-85px, 10px) rotate(0deg) scale(0.5)";
//     // collisionSound.currentTime = 0; // rewind to start of sound
//     // collisionSound.play();
//     console.log("colliding!")
//     collided = true;
//     cane.style.filter = 'drop-shadow(0px 0px 10px white)';
//     var rotation = (x / 2) * 0.7;
//     // Update the transform property with the new rotation value
//     follower.style.transform = "translate(-85px, 10px) rotate(" + rotation + "deg) scale(0.5)";

//   } else {
//     var rotation = (x / 2) * 0.7;
//     // Update the transform property with the new rotation value
//     cane.style.filter = 'none'
//     follower.style.transform = "translate(-85px, 10px) rotate(" + rotation + "deg) scale(0.5)";
//   }
});