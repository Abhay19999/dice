var rannum1 = Math.floor(Math.random() * 6) + 1;

var diceimg1 =  "dice" + rannum1 + ".png";
var randomImage1 = "images/" + diceimg1;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImage1);


var rannum2 = Math.floor(Math.random() * 6) + 1;

var diceimg2 = "images/dice" + rannum2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", diceimg2);

 if (rannum1 > rannum2) {
    document.querySelector("h1").innerHTML = "🔥Player 1 wins🔥"; 
    
 }
 else if (rannum2 > rannum1){
     document.querySelector("h1").innerHTML = "🔥Player 2 wins🔥";

 }
 else {
     document.querySelector("h1").innerHTML = "🏳️ Draw 🏳️";
     
 }