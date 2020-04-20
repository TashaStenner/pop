const pop = new Audio ("./pop.mp3");

const increaseSize = () => {
  let balloon = document.getElementById("balloon");
  let text = document.getElementById("text");
  let confetti = document.getElementById("confettiContainer");
 
  let height = balloon.offsetHeight;
  let newHeight = height + 10;
  let width = balloon.offsetWidth;
  let newWidth = width + 10;

  return newHeight <= 240 && newWidth <= 230
    ? ((balloon.style.height = newHeight + "px"),
      (balloon.style.width = newWidth + "px"))
    : ((balloon.style.background = "transparent"),
      (text.style.opacity = "1"),
      (confetti.style.opacity = "1"), 
      pop.play());
};

