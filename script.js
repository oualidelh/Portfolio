// function to change the size of the img without losing the bit
function resizeImage() {
  const img = document.getElementById("myImage1");

  // Set the desired width and height
  const maxWidth = 500; // Adjust as needed
  const maxHeight = 500; // Adjust as needed

  // Calculate the aspect ratio
  const aspectRatio = img.width / img.height;

  // Resize the image while maintaining the aspect ratio
  if (img.width > maxWidth) {
    img.width = maxWidth;
    img.height = maxWidth / aspectRatio;
  }

  if (img.height > maxHeight) {
    img.height = maxHeight;
    img.width = maxHeight * aspectRatio;
  }
}

// Call the resize function when the page loads
window.onload = resizeImage;
// functions to change the feilds
let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);
// circle skill
const circles = document.querySelectorAll(".circle");
circles.forEach((elm) => {
  var dots = elm.getAttribute("data-dots");
  var marked = elm.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg "></div>`;
  }
  elm.innerHTML = points;
  const pointsMarked = elm.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});
