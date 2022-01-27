const images = ["아기오구_가을준비.jpeg", "아기오구_독서.jpg", "아기오구_모험.jpeg", "아기오구_캠핑.JPG"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `https://mayowall.github.io/nomadCoderJSChallengeGraduation/img/${chosenImage}`;

const bgTitle = document.createElement("div");
bgTitle.className = "title";
bgTitle.innerText = "[ BACKGROUND IMAGE ]";

document.body.appendChild(bgTitle);
document.body.appendChild(bgImage);
