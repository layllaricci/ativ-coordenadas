const button = document.querySelector("button");
const inputX = document.getElementById("X");
const inputY = document.getElementById("Y");

button.addEventListener("click", Quadrantes);

function Quadrantes() {
    const x = parseFloat(inputX.value);
    const y = parseFloat(inputY.value);

    if (x === 0 && y === 0) {
        alert("Origem");
    } else if (x === 0) {
        alert("Eixo Y");
    } else if (y === 0) {
        alert("Eixo X");
    } else if (x > 0 && y > 0) {
        alert("Q1");
    } else if (x < 0 && y > 0) {
        alert("Q2");
    } else if (x < 0 && y < 0) {
        alert("Q3");
    } else if (x > 0 && y < 0) {
        alert("Q4");
    }
}