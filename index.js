var randomNumber1 = Math.floor((Math.random()* 6)) + 1;

var randomDice = "dice" + randomNumber1 + ".png";

var randomSourceImg = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSourceImg );

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomSourceImg2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomSourceImg2);

//Adding Conditions

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else{
  document.querySelector("h1").innerHTML = "🎲 Draw!"
}
