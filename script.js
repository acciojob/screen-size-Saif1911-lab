const sizeInfo = document.querySelector("#sizeInfo h1");

function updateWindowSize() {
  sizeInfo.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}

// Initial render (critical for Cypress)
updateWindowSize();

// Resize listener
window.addEventListener("resize", updateWindowSize);
