//reference: https://en.wikipedia.org/wiki/L%C3%A9vy_flight
//reference: https://www.youtube.com/watch?v=bqF9w9TTfeo
//initialize the postion of the walker
var pos1, pos2, pos3, pos4, pos5;
var prev1, prev2, prev3, prev4, prev5;

//detect if max is connected
function detectMax() {
  try {
    window.max.outlet('Hello Max!');
    return true;
  }
  catch(e) {
    console.log('Max, where are you?');
  }
  return false;
}

var sketch = function(p){
// test and memorize if the sketch is loaded inside max jweb object
const maxIsDetected = detectMax();

//for diffr\erent preset visualization
let currentState = 0;
  
p.windowResized = function() {
  p.resizeCanvas(innerWidth, innerHeight);}
//use windowResized function to adopt canvas size to 
//the current size of the browser

//for time control in max
let frameRate_speed = 2;

p.setup = function(){
  p.createCanvas(innerWidth, innerHeight);
  //starting position
  pos1 = p.createVector(innerWidth/2.3, innerHeight/2.3);
  pos2 = p.createVector(innerWidth/2.5, innerHeight/2.8);
  pos3 = p.createVector(innerWidth/2.3, innerHeight/2); 
  pos4 = p.createVector(innerWidth/2.1, innerHeight/1.9); 
  pos5 = p.createVector(innerWidth/1.9, innerHeight/2.6);
  //make a new vector of the previous position
  prev1 = pos1.copy();
  prev2 = pos2.copy();
  prev3 = pos3.copy();
  prev4 = pos4.copy();
  prev5 = pos5.copy();
  p.background(222);
  }
  
  p.draw = function(){
  let r = p.floor(p.random(100));
  //set the frame rate
  if(maxIsDetected){
  window.max.bindInlet('set_frameRate', function (speed) {
    frameRate_speed = speed;
    p.frameRate(frameRate_speed);
  });
  window.max.bindInlet('set_currentState', function (state) {
    currentState = state;
  });
  // 2 data outputs
  window.max.outlet('walk', r);
  let dict = {
   r: r
   };
   window.max.setDict('walkDict', dict);}
  
  //------------------------------------
  //purple
  //set up the color
  if(currentState == 1){
  p.stroke(197, 193, 210);
  p.strokeWeight(2);
  p.point(pos1.x, pos1.y);
  //draw a line between position and previous position
  p.line(pos1.x, pos1.y, prev1.x, prev1.y);
  //set the value of previous to position
  prev1.set(pos1);
  //random step size 1
  var step = p5.Vector.random2D();
  //probabilty of the length
  //levy flight
  if(r < 2){
  step.mult(p.random(15, 40));
  }else{
  step.setMag(2);
  }
  pos1.add(step);}
  //------------------------------------
  //green
  //set up the color
  if(currentState == 2){
  p.stroke(187, 209, 170);
  p.strokeWeight(2);
  p.point(pos2.x, pos2.y);
  //draw a line between position and previous position
  p.line(pos2.x, pos2.y, prev2.x, prev2.y);
  //set the value of previous to position
  prev2.set(pos2);
  //random step size 1
  var step = p5.Vector.random2D();
  //probabilty of the length
  //levy flight
  if(1< r <3){
  step.mult(p.random(2, 6));
  }else{
  step.setMag(4);
  }
  pos2.add(step);}
  //------------------------------------
  if(currentState == 3){
  //yellow
  //set up the color
  p.stroke(247, 246, 228);
  p.strokeWeight(2);
  p.point(pos3.x, pos3.y);
  //draw a line between position and previous position
  p.line(pos3.x, pos3.y, prev3.x, prev3.y);
  //set the value of previous to position
  prev3.set(pos3);
  //random step size 1
  var step = p5.Vector.random2D();
  //probabilty of the length
  //levy flight
  if(3< r <5){
  step.mult(p.random(1, 4));
  }else{
  step.setMag(3);
  }
  pos3.add(step);}
  //------------------------------------
  if(currentState == 4){
  //red
  //set up the color
  //stroke(204, 67, 51);
  p.stroke(130, 147, 173);
  p.strokeWeight(2);
  p.point(pos4.x, pos4.y);
  //draw a line between position and previous position
  p.line(pos4.x, pos4.y, prev4.x, prev4.y);
  //set the value of previous to position
  prev4.set(pos4);
  //random step size 1
  var step = p5.Vector.random2D();
  //probabilty of the length
  //levy flight
  if(4< r <6){
  step.mult(p.random(1, 3));
  }else{
  step.setMag(3);
  }
  pos4.add(step);}
  //------------------------------------
  if(currentState == 5){
  //blue
  //set up the color
  p.stroke(99, 100, 104);
  p.strokeWeight(2);
  p.point(pos5.x, pos5.y);
  //draw a line between position and previous position
  p.line(pos5.x, pos5.y, prev5.x, prev5.y);
  //set the value of previous to position
  prev5.set(pos5);
  //random step size 1
  var step = p5.Vector.random2D();
  //probabilty of the length
  //levy flight
  if(3.5< r <5){
  step.mult(p.random(1, 3));
  }else{
  step.setMag(2);
  }
  pos5.add(step);
  console.log(r);}
  }
}

var myp5 = new p5(sketch);