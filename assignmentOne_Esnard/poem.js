class PoemWord {
  constructor(i) {
    this.word = poem_text[i];
    this.start_rain();
  }

  update(x, y, w, h) {
    if(this.word_collide(x, y, w, h)) {
      this.fY += 0;
      this.font_color = color("#CC0000");

      if(this.word === "screams") {
        this.font_color = color("#000000");
        this.font_size = 0;
        this.dY += 10;
      }
    }
    else this.fY += this.dY;

    if(this.fY + this.fH > height) {
      this.start_rain();
    }
  }

  start_rain() {
    this.x = random(width);
    this.y = random(-50, -10); 
    
    this.font_size = random(12, 24);
    this.font_color = color("#3366FF");
    let font_bound = fontBounds(this.word, this.x, this.y, this.font_size);
    this.fX = font_bound.x;
    this.fY = font_bound.y;
    this.fW = font_bound.w;
    this.fH = font_bound.h;

    this. dY = map(this.font_size, 12, 24, 0.5, 2);
  }

  display_word() {
    noFill();
    noStroke();
    //rect(this.fX, this.fY, this.fW, this.fH);
    
    textFont(font);
    textSize(this.font_size);
    
    fill(this.font_color);
    text(this.word, this.fX, this.fY + this.fH);
  }

  word_collide(x, y, w, h) {
    let r = x + w;
    let l = x;
    let t = y;
    let b = y + h;

    if(r >= this.fX && (l <= this.fX + this.fW) && (t <= this.fY + this.fH) && (b >= this.fY + this.fH)) {
      return true;
    }
    else return false;
  }
}

