let width;
let height;
let graphic;
let poem_text;

let words;
let num_words;

let cX, cY, cW, cH;

let font;

async function setup() {
  width = displayWidth / 4;
  height = displayHeight / 2;

  createCanvas(width, height);

  poem_text = ["I", "am", "trapped", "inside", "a", "body", "that", "bleeds", "and", "bleeds", "and", "bleeds","the", "bones", "contort", "and", "the", "muscles", "bend", "and", "no", "one", "can", "hear", "the", "screams", "from", "within"];

  words = [];
  num_words = poem_text.length;

  for(let i = 0; i < num_words; i++) {
    words[i] = new PoemWord(i);
  }
  

  cW = 45;
  cH = 5;
  
  font = await loadFont("./fonts/FSEX302.ttf");
  
}

function draw() {
  background(0);
  noFill();
  cX = mouseX;
  cY = mouseY;
  
  rect(cX, cY, cW, cH);

  for(let i = 0; i < num_words; i++) {
    words[i].update(cX, cY, cW, cH);
    words[i].display_word();
  }
}
