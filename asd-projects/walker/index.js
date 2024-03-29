/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  //varibles to keep track of of walker game item speed and positions, etc...
var xCord = 0
var yCord = 0
var speedX = 0
var speedY = 0


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  //Map the arrow keys: "Left", "Right", "Up", "Down"
  const KEY = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40
  }
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  
  
  
  function newFrame() {
    repositionGameItem()
    redrawGameItem()
  }
  
  /* 
  Called in response to events.
  */
 ///Logs the arrow keys that are pressed and decides the speed and direction depending on the key pressed
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      console.log("Left Arrow Pressed")
      speedX = -5
    }
console.log(event.keyCode)
 if (event.which === KEY.RIGHT) {
  console.log("Right Arrow Pressed")
  speedX = 5
}
 else if (event.which === KEY.UP) {
  console.log("Up Arrow Pressed")
  speedY = -5
}
 else if (event.which === KEY.DOWN) {
  console.log("Down Arrow Pressed")
  speedY = 5
}
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function handleKeyUp(event) {
  if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
    speedX = 0
  }

  if (event.which === KEY.UP || event.which === KEY.DOWN) {
    speedY = 0
  }
}

  function repositionGameItem() {
xCord += speedX
yCord += speedY


}
function redrawGameItem() {
$("#walker").css("left", xCord);
$("#walker").css("top", yCord);

}
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
