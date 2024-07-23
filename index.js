

const colors = ["green", "red", "rgba(133,122,200)", "#f1f502", "black"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
    color.style.color = colors[randomNumber]

    if(color.textContent === "black"){
        btn.style.backgroundColor = "#fff"
    } else {
        btn.style.backgroundColor = "initial"
    }

})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}