let btnReset;

//Grid info.
let grid;
let gridScale = 15;

let size = 400;
let widths = 600 / gridScale;


let palette = ['#000000', '#FFFFFF', '#FF0000', '#FFFF00',
               '#00FF00', '#00FFFF', '#0000FF', '#FF00FF',
               '#808080', '#C0C0C0', '#800000', '#808000',
               '#008000', '#008080','#000080', '#800080'];

//Colour grid info.
let colourGrid = new Array(palette.length);
let colourSize = 40;


let mouseColour = palette[1];


function make2DArray(gridScale) {

  let arr = new Array(gridScale);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(gridScale);
  }

  return arr;

}


function mousePressed() {

  //Gets colour from colour grid, then applies it to the mouseColour.
  for(let i = 0; i < palette.length; i++) {
    if(colourGrid[i].clicked(mouseX, mouseY)) {
      mouseColour = colourGrid[i].getColour();
    }
  }
  
  //Changed the grid to match the colour of the selected colour of the user.
  for(let i = 0; i < gridScale; i++) {
    for (let j = 0; j < gridScale; j++) {
      if (grid[i][j].clicked(mouseX, mouseY)) {
        grid[i][j].changeColour(mouseColour);
      }
    }
  }

}

function reset() {
  
  for (let i = 0; i < gridScale; i++) {
    for (let j = 0; j < gridScale; j++) {
      grid[i][j].changeColour(palette[1]);
    }
  } 
  
}

function setup() {
  createCanvas(size * 2, 720);
  
   //Creates the grid.
  grid = make2DArray(gridScale);
  for (let i = 0; i < gridScale; i++) {
    for (let j = 0; j < gridScale; j++) {
      grid[i][j] = new Cell( 20 + (i * widths), 100 + (j * widths), widths, palette[1], 1);
    }
  }
  
  //Create colour palette grid.
  for(let i = 0; i <= palette.length - 7; i++) {
    colourGrid[i] = new Cell(660, 180 + (colourSize * i), colourSize, palette[i], i);
    
  }
  for(let i = 8; i <= palette.length; i++) {
    colourGrid[i] = new Cell(700, -140 + (colourSize * i), colourSize,  palette[i], i); 
  }
  
  //Interactive Setups
  btnReset = createButton('Reset');
  btnReset.position(660, 550);
  btnReset.size(80);
  btnReset.mousePressed(reset);
  
  
}

function draw() {
  background(150);
  
  //Text display.
  textSize(48);
  fill(0);
  text('Pixel Painter 1.0', 140, 90);
  
  textSize(24);
  text('Colour', 660, 140);
  text('Palette', 660, 160);
  

  for (let i = 0; i < gridScale; i++) {
    for (let j = 0; j < gridScale; j++) {
      grid[i][j].show();
    }
  } 
  
  for(let i = 0; i < palette.length; i++) {
      colourGrid[i].show();
  }

}