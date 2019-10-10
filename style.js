let img;
x = 0;
y = 0;
w = 250;
h = 400;
let img2;
x2 = 0;
y2 = 0;
w2 = 250;
h2 = 400;
let img3;
x3 = 0;
y3 = 0;
w3 = 250; 
h3 = 400;
function preload() {
  img = loadImage('IMG_0147.jpg');
  img2 = loadImage('IMG_0149.jpg');
 // img3 = loadImage('IMG_0152.jpg');
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  // scale(.25);
   image(img,0,0);
   image(img2,300,300);
   image(img3,400,400);
  // get the width and height of the image so we can center it initially
//  bounds = img.imgBounds(image, 0, 0, imageSize);
//  x = width / 2 - bounds.w / 2;
//  y = height / 2 - bounds.h / 2;
}

function draw() {
  background(710, 400, 150);

  //background(204, 120);

  //get its bounding box
  
  //image(img, x, y, w, h);
  //image(img2, x2, y2, w2, h2);
  //image(img3, x3, y3, w3, h3);
  // bounds = img.imgBounds(image, x, y, imageSize);

  //check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= x &&
    mouseX <= x + w &&
    mouseY >= y &&
    mouseY <= y + h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
  //if (
    //mouseX >= x2 &&
    //mouseX <= x2 + w2 &&
    //mouseY >= y2 &&
    //mouseY <= y2 + h2
  //) {
    //x2 += random(-5, 5);
    //y2 += random(-5, 5);
  //}
  //if (
    //mouseX >= x3 &&
    //mouseX <= x3 + w3 &&
    //mouseY >= y3 &&
    //mouseY <= y3 + h3
  //) {
    //x3 += random(-5, 5);
    //y3 += random(-5, 5);
  //}
}