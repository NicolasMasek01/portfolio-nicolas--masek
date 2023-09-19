function animateProgressBar(bar, targetWidth) {
  let width = 0;
  const interval = setInterval(frame, 10);

  function frame() {
    if (width >= targetWidth) {
      clearInterval(interval);
    } else {
      width++;
      bar.style.width = width + "%";
      bar.innerHTML = width + "%";
    }
  }
}

let progressBarAnimationStarted = false;
let progressBar1AnimationStarted = false;

function checkScroll() {
  const progressBar = document.getElementById("myBar");
  const progressBar1 = document.getElementById("myBar1");
  const progressBarPosition = progressBar.getBoundingClientRect().top;
  const progressBar1Position = progressBar1.getBoundingClientRect().top;

  if (
    progressBarPosition <= window.innerHeight &&
    !progressBarAnimationStarted
  ) {
    animateProgressBar(progressBar, 100);
    progressBarAnimationStarted = true;
  }

  if (
    progressBar1Position <= window.innerHeight &&
    !progressBar1AnimationStarted
  ) {
    animateProgressBar(progressBar1, 35); // Animar hasta el 35%
    progressBar1AnimationStarted = true;
  }
}

window.addEventListener("scroll", checkScroll);
