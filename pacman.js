var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];
var direction = 0;
var focus = 0;

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);

  if (direction === 0) {
    pos += 20; // Move right by 20 pixels
  } else {
    pos -= 20; // Move left by 20 pixels
  }

  img.src = pacArray[direction][focus];
  img.style.left = pos + "px"; // Update the PacMan's position on the page
}

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (pos + imgWidth > pageWidth) direction = 1;
  if (pos < 0) direction = 0;

  return direction;
}

setInterval(Run, 200); 