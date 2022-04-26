'use strict'

const picContainerElement = document.getElementById('products');
const pic1Element = document.getElementById('pic1');
const pic2Element = document.getElementById('pic2');
const pic3Element = document.getElementById('pic3');
const pic1TitleElement = document.getElementById('image1title');
const pic2TitleElement = document.getElementById('image2title');
const pic3TitleElement = document.getElementById('image3title');

let count = 0;

let pic1 = null;
let pic2 = null;
let pic3 = null; 

function Image(name, imgPath,){
    this.name = name;
    this.imgPath = imgPath;
    this.clicks = 0;
    this.views = 0;
}

Image.allImages = []

Image.prototype.renderImage = function(img, h2){
    img.src = this.imgPath;
    h2.textContent = this.name;
    this.views ++;
}

Image.allImages.push(new Image('Banana Slicer' , './images/banana.jpg'));
Image.allImages.push(new Image('Bathroom Stand' , './images/bathroom.jpg'));
Image.allImages.push(new Image('Boots' , './images/boots.jpg'));
Image.allImages.push(new Image('Breakfast' , './images/breakfast.jpg'));
Image.allImages.push(new Image('Bubblegum' , './images/bubblegum.jpg'));
Image.allImages.push(new Image('Unicorn' , './images/unicorn.jpg'));
Image.allImages.push(new Image('Wine-glass' , './images/wine-glass.jpg'));
Image.allImages.push(new Image('Water-can' , './images/water-can.jpg'));
Image.allImages.push(new Image('Tauntaun' , './images/tauntaun.jpg'));
Image.allImages.push(new Image('Baby Sweep' , './images/sweep.png'));
Image.allImages.push(new Image('Shark Sleeping bag' , './images/shark.jpg'));
Image.allImages.push(new Image('Scissors/Pizza cutter' , './images/scissors.jpg'));
Image.allImages.push(new Image('Pet-sweep' , './images/pet-sweep.jpg'));
Image.allImages.push(new Image('Pen' , './images/pen.jpg'));
Image.allImages.push(new Image('Dragon' , './images/dragon.jpg'));
Image.allImages.push(new Image('Chair' , './images/chair.jpg'));
Image.allImages.push(new Image('Cthulhu' , './images/cthulhu.jpg'));
Image.allImages.push(new Image('Bag' , './images/bag.jpg'));

function getThreeImages(){
    const cantUse = [pic1, pic2, pic3];
    if(cantUse.includes(pic1)){
        let picOne = Math.floor(Math.random() * Image.allImages.length);
        pic1= Image.allImages[picOne];
    }
    cantUse.push[pic1]
    if(cantUse.includes(pic2)){
        let picTwo = Math.floor(Math.random() * Image.allImages.length);
        pic2 = Image.allImages[picTwo];
    }
    cantUse.push[pic2]
    if(cantUse.includes(pic3)){
        let picThree = Math.floor(Math.random()* Image.allImages.length);
        pic3 = Image.allImages[picThree];
    }
    cantUse.push[pic3];
}

    function renderImage(){
        pic1.renderImage(pic1Element, pic1TitleElement);
        pic2.renderImage(pic2Element, pic2TitleElement);
        pic3.renderImage(pic3Element, pic3TitleElement);
    }
getThreeImages();
renderImage();

