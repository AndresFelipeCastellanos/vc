let img;

function setup(){
    createCanvas(960,640);
    img = createImg("/vc/docs/sketches/monte-fuji.jpg","");
}

function draw(){
    image(img,0,0);
}