'use strict'

const picContainerElement = document.getElementById('products');
const picContainerElement = document.getElementById('imagecontainer1');
const picContainerElement = document.getElementById('imagecontainer2');
const picContainerElement = document.getElementById('imagecontainer3');
const picContainerElement = document.getElementById('image1title');
const picContainerElement = document.getElementById('image2title');
const picContainerElement = document.getElementById('image3title');

function Image(name, imgPath,){
    this.name = name;
    this.imgPath = imgPath;
    this.clicks = 0;
    this.views = 0;
}

Image.allImages = []

Image.allImages.push(new Image('Banana' , './images/banana.jpg'));
Image.allImages.push(new Image('Bathroom' , './images/bathroom.jpg'));
Image.allImages.push(new Image('Boots' , './images/boots.jpg'));
Image.allImages.push(new Image('Breakfast' , './images/breakfast.jpg'));
Image.allImages.push(new Image('Bubblegum' , './images/bubblegum.jpg'));
Image.allImages.push(new Image('Unicorn' , './images/unicorn.jpg'));
Image.allImages.push(new Image('Wine-glass' , './images/wine-glass.jpg'));
Image.allImages.push(new Image('Water-can' , './images/water-can.jpg'));
Image.allImages.push(new Image('Tauntaun' , './images/tauntaun.jpg'));
Image.allImages.push(new Image('Sweep' , './images/sweep.png'));
Image.allImages.push(new Image('Shark' , './images/shark.jpg'));
Image.allImages.push(new Image('Scissors' , './images/scissors.jpg'));
Image.allImages.push(new Image('Pet-sweep' , './images/pet-sweep.jpg'));
Image.allImages.push(new Image('Pen' , './images/pen.jpg'));
Image.allImages.push(new Image('Dragon' , './images/dragon.jpg'));
Image.allImages.push(new Image('Chair' , './images/chair.jpg'));
Image.allImages.push(new Image('Cthulhu' , './images/cthulhu.jpg'));
Image.allImages.push(new Image('Bag' , './images/bag.jpg'));


