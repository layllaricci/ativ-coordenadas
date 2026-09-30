const button = document.querySelector("button")
const inputX = document.getElementById("X")
const inputY = document.getElementById("Y")

button.addEventListener ("click", Quadrantes)
function Quadrantes() {


    if (X > 0 && Y > 0) {alert("Q1")}

    else if (X < 0 && Y > 0) {alert("Q2")}

    else if (X < 0 && Y < 0) {alert("Q3")}

    else if (X > 0 && Y < 0) {alert("Q4")}

    
}