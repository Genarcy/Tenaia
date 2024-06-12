const stickman = document.getElementById('stickman');
const container = document.querySelector('.container');

function climbUp() {
  const climbInterval = setInterval(() => {
    const currentPosition = parseFloat(window.getComputedStyle(stickman).bottom);
    if (currentPosition >= (container.offsetHeight - 50)) { 
      clearInterval(climbInterval);
      zoomOut();
    } else {
      stickman.style.bottom = `${currentPosition + 1}px`; 
    }
  }, 10);
}

function zoomOut() {
  container.style.transition = 'transform 2s ease';
  container.style.transform = 'scale(0.5)'; 
}


climbUp();
