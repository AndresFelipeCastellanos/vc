let baseImg;
let width = 400;
let height = 300;

function preload(){
    baseImg = loadImage("/vc/docs/sketches/monte-fuji.jpg","");
}

function setup(){
    createCanvas(800,600);
    image(baseImg, 0, 0, width, height);
    toNegative(baseImg);
    image(baseImg, 400, 0, width, height);
    toGray(baseImg);
    image(baseImg, 400, 300, width, height);
    toNegative(baseImg);
    image(baseImg, 0, 300, width, height);
}

/*Set the inverted colors for an image*/
function toNegative(img){
    img.loadPixels();
    for (let i = 0; i < 4 * img.width * img.height; i += 4) {
        img.pixels[i] = 255 - img.pixels[i];
        img.pixels[i + 1] = 255 - img.pixels[i + 1];
        img.pixels[i + 2] = 255 - img.pixels[i + 2];
        img.pixels[i + 3] = img.pixels[i + 3];
    }
    img.updatePixels();
};

/*Set the grayscale for an image*/
function toGray(img){
    img.loadPixels();
    let grayColor;
    for (let i = 0; i < 4 * img.width * img.height; i += 4) {
        //With the same weight for red, green and blue colors, get the mean of them and set the gray value
        grayColor = (img.pixels[i] + img.pixels[i + 1] + img.pixels[i + 2])/3;
        img.pixels[i] = grayColor;
        img.pixels[i + 1] = grayColor;
        img.pixels[i + 2] = grayColor;
        img.pixels[i + 3] = img.pixels[i + 3];
    }
    img.updatePixels();
};