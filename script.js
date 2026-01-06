// your JS code here. If required.
const sizeInfo = document.getElementById("sizeInfo");

sizeInfo.innerHTML = `<h1>Width: ${window.innerWidth} and Height: ${window.innerHeight}</h1>`;

window.addEventListener('resize', () => {
  sizeInfo.innerHTML = `<h1>Width: ${window.innerWidth} and Height: ${window.innerHeight}</h1>`;
});
