var backColor;

var topLeftCorner = 0;
var topRightCorner = 0;
var score = 0;
var rules= "Use the a and d keys to make the white ball eat the blue ball"

var avatarX, avatarY;
var bulletX, bulletY;

// var scoreFont;

// function preload() {
//   scoreFont = loadFont("mansalva.ttf");
// }

function setup() {
  createCanvas(950, 700);
  backColor = color("orange");
  noStroke();
  avatarX = 0;
  avatarY = 0;
}

function draw() {
  background(100);

  background(backColor);
  textAlign(topLeftCorner);
  // textFont(scoreFont);
  textSize(50);
  fill(20,30,100);
  text(score, width - 900, height - 610);

   textAlign(topRightCorner);
   textSize(20);  
   fill(20,30,100);
   text(rules,width-900, height -580)

  if (keyIsPressed) {
    if (key == "a") {
      avatarX--;
      bulletX = avatarX;
      bulletY = avatarY;
    }
    if (key == "d") {
      avatarX++;
      bulletX = avatarX;
      bulletY = avatarY;
    }
  }


  var v1 = createVector(avatarX, avatarY);

  fill("white");
  circle(avatarX ++, avatarY ++,50);

  var purpCX = width / 2;
  var purpCY = height * .75;
  var purpCR = 50;

  fill(20,30,100);
  circle(purpCX, purpCY, purpCR);

  if (dist(bulletX, bulletY, purpCX, purpCY) < 25 + 2) {
    if (purpleOnce == 0) {
      score = "YOU WIN!";
      purpleOnce = 1;
    }
  }

}

var purpleOnce = 0;