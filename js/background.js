const images = ["fall.jpeg", "book.jpg", "adventure.jpeg", "camping.JPG"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `https://mayowall.github.io/nomadCoderJSChallengeGraduation/img/${chosenImage}`;

const bgTitle = document.createElement("div");
bgTitle.className = "title";
bgTitle.innerText = "[ BACKGROUND IMAGE ]";

document.body.appendChild(bgTitle);
document.body.appendChild(bgImage);
