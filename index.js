let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImageSourse1 = "images/dice" + randomNumber1 + ".png";
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSourse1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSourse2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSourse2);
const heading = document.querySelector("h1");
if (randomNumber1 === randomNumber2){
    heading.innerHTML = "Draw!";

} else if (randomNumber1 > randomNumber2){
    heading.innerHTML = "Player 1 Wins!";

} else {
    heading.innerHTML = "Player 2 Wins!";

}