let about;
function setup() {
  createCanvas(windowWidth, windowHeight);
  about = createButton("HOME");
  about.position(width - 80, 50);
  about.mouseClicked(aboutClicked);
}

function draw() {
  background("F6F6F6");
}

function aboutClicked() {
  window.open("index.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
