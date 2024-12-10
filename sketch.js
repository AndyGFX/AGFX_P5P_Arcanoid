
let ball;
let gui;
let b;
let logo;


let cols; let rows; 
let spacing = 15; 
let size = [];
let scl = 0.20;

let GRID = null;
let PLAYER = null;
let PLAYER_ID = 0;
let BALL_ID = 1;

let p = 0;
// https://q5js.org/home/
// https://p5js.org/libraries/

function preload() 
{
    logo = loadImage('./assets/sprites/player-sheet.png');
}


function setup() 
{

    createCanvas(640, 400);

	displayMode('centered','pixelated','x1');

    noSmooth();

    rectMode(CENTER);

    let spacing = 10;

    GRID = new TGridEffect(1+width/spacing, 1+height/spacing,spacing);
    GRID.SetEffectRadius(128);
    GRID.color.stroke = 0.8;
    GRID.color.fill = 0.9;
    colorMode(RGB, 1);

    GRID.AddPoint(10,10);
    GRID.AddPoint(64,10);
    
    PLAYER = new TPlayer();

    console.log(GRID);
}

function draw() 
{

	background('skyblue');

 
    p += 1;

    GRID.SetPointPosition(BALL_ID, mouseX, mouseY);
    GRID.SetPointPosition(PLAYER_ID, PLAYER.x, PLAYER.y);

    if (p>height)
    {
        p = 0;
    }
    GRID.Draw();
    PLAYER.Draw()
  
    textSize(16);
    text(getTargetFrameRate(), 600, 16);    
    text(round(getFPS()), 600, 32);

    

}