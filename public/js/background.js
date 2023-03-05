const images = ["0.jpg", "1.jpg", "2.jpg"];




const body = document.querySelector("body");

const numImages = images.length;

const selectImage = function() {
const indexImage = Math.floor(Math.random() * numImages);
const chosen = images[indexImage];
body.style.backgroundImage = `url("./image/${chosen}")`;
console.log(body.style.backgroundImage);
}

selectImage();
