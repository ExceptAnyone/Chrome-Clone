const images = ["0.jpg", "1.jpg", "2.jpg"];
const body = document.getElementById('body');
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
document.body.appendChild(bgImage);
bgImage.src = `img/${chosenImage}`;

bgImage.style.width = '100%';
bgImage.style.height = '100%';