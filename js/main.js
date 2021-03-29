// Snake Game
// Made by: David van Mourik
// ©2019

let snake;
let rez = 20;
let food;
let w;
let h;
let score;

function setup() {
  createCanvas(400, 400);
  w = floor(width/rez);
  h = floor(height/rez);
  frameRate(10);
  snake = new Snake();
  foodLocation();
  score = 0;
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
	snake.setDir(0, -1);
  }
}

function draw() {
  scale(rez);
  background(51);
  if (snake.eat(food)) {
    foodLocation();
    score += 10;
  }
  snake.update();
  snake.show();
  
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
  
  fill(255, 150)
  textSize(1);
  text("SCORE: "+ score, 1, 1.5);
  
  if (snake.endGame()) {
    background(255, 0, 0)
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(2);
    text("GAME OVER :/", w/2, h/2)
    textSize(1.5);
    text("FINAL SCORE: " + score, w/2, 12);
    noLoop();
  }
}