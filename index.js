var randomNumber = Math.floor(Math.random()*6) + 1;//1-6

var randomDiceImages = "dice" + randomNumber + ".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImages;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 wins!!";
}
else if (randomNumber < randomNumber2) {
  document.querySelector("h1").innerHTML = "player 2 wins!!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!!";
}
