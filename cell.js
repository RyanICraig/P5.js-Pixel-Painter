class Cell {

  constructor(x, y, w, colour, number) {

    this.x = x;
    this.y = y;
    this.w = w;
    this.colour = colour;
    this.number = number;
    
  }
  
  show() {
    
    stroke(0);
    strokeWeight(1);
    fill(this.colour);
    square(this.x, this.y, this.w);
    
  }
  
  //Checks if x and y coordinates are within cell.
  clicked(x, y) {
    return (x > this.x && x < this.x + this.w && 
            y > this.y && y < this.y + this.w);
      
  }
  
  //Gets colour of cell and returns.
  getColour() {
    return this.colour;
  }
  
  //Takes colour as input and applies to cell.
  changeColour(colour) {
    this.colour = colour;
  }

}
