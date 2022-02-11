let apoc;
let img;
let mx;
let my;
let discover;
let about;

function preload() {
  apoc = loadFont("./Assets/fonts/ApocTrial-RevelationsItalic.otf");
  img = loadImage("./Assets/Image/pallette.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  discover = createButton("DISCOVER");
  discover.position(100, 50);
  discover.mouseClicked(discoverClicked);

  about = createButton("ABOUT");
  about.position(width - 80, 50);
  about.mouseClicked(aboutClicked);
}

function draw() {
  background("#f6f6f6");

  imageMode(CENTER);
  mx = map(mouseX, 0, windowWidth, windowWidth / 2 - 50, windowWidth / 2 + 50);
  my = map(
    mouseY,
    0,
    windowHeight,
    windowHeight / 2 - 50,
    windowHeight / 2 + 50
  );
  image(img, mx, my);

  fill("black");
  textSize(400);
  textFont(apoc);
  textAlign(CENTER);
  fill("#169264");
  text("DataSeez", windowWidth / 2, windowHeight - 100);
}

function aboutClicked() {
  window.open("about.html", "_self");
}

function discoverClicked() {
  window.open("data.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
