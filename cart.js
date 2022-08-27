var cartItemsTotalAmount = 0;

var tomatoPrice = 19;
var onionPrice = 30;
var BrinjalPrice = 20;
var potatoPrice = 12;


var freeShippingEligibility = 75;
var freeShippingBar = document.getElementById("free-shipping");

document.getElementById("tomato").addEventListener("click", function() {
    cartItemsTotalAmount += tomatoPrice;
    if(cartItemsTotalAmount >= freeShippingEligibility){
        freeShippingBar.style.color = "green";
            freeShippingBar.innerHTML = "<a href='#' style='color: green;'>You've claimed free shipping.</a>"
    }
    
    else if(cartItemsTotalAmount < freeShippingEligibility && cartItemsTotalAmount >= 12){
        var away = 75 - cartItemsTotalAmount;
        freeShippingBar.innerHTML = "<a href='#' style='color: blue;'>You are " + away + " amount away from free shipping. </a>";
    }
});


document.getElementById("onion").addEventListener("click", function() {
    cartItemsTotalAmount += onionPrice;
    if(cartItemsTotalAmount >= freeShippingEligibility){
        freeShippingBar.style.color = "green";
            freeShippingBar.innerHTML = "<a href='#' style='color: green;'>You've claimed free shipping.</a>"
    }
    
    else if(cartItemsTotalAmount < freeShippingEligibility && cartItemsTotalAmount >= 12){
        var away = 75 - cartItemsTotalAmount;
        freeShippingBar.innerHTML = "<a href='#' style='color: blue;'>You are " + away + " amount away from free shipping. </a>";
    }
});

document.getElementById("brinjal").addEventListener("click", function() {
    cartItemsTotalAmount += BrinjalPrice;
    if(cartItemsTotalAmount >= freeShippingEligibility){
        freeShippingBar.style.color = "green";
            freeShippingBar.innerHTML = "<a href='#' style='color: green;'>You've claimed free shipping.</a>"
    }
    
    else if(cartItemsTotalAmount < freeShippingEligibility && cartItemsTotalAmount >= 12){
        var away = 75 - cartItemsTotalAmount;
        freeShippingBar.innerHTML = "<a href='#' style='color: blue;'>You are " + away + " amount away from free shipping. </a>";
    }
});

document.getElementById("potato").addEventListener("click", function() {
    cartItemsTotalAmount += potatoPrice;
    if(cartItemsTotalAmount >= freeShippingEligibility){
        freeShippingBar.style.color = "green";
            freeShippingBar.innerHTML = "<a href='#' style='color: green;'>You've claimed free shipping.</a>"
    }
    
    else if(cartItemsTotalAmount < freeShippingEligibility && cartItemsTotalAmount >= 12){
        var away = 75 - cartItemsTotalAmount;
        freeShippingBar.innerHTML = "<a href='#' style='color: blue;'>You are " + away + " amount away from free shipping. </a>";
    }
});


document.getElementById("okra").addEventListener("click", function() {
    cartItemsTotalAmount += tomatoPrice;
    if(cartItemsTotalAmount >= freeShippingEligibility){
        freeShippingBar.style.color = "green";
            freeShippingBar.innerHTML = "<a href='#' style='color: green;'>You've claimed free shipping.</a>"
    }
    
    else if(cartItemsTotalAmount < freeShippingEligibility && cartItemsTotalAmount >= 12){
        var away = 75 - cartItemsTotalAmount;
        freeShippingBar.innerHTML = "<a href='#' style='color: blue;'>You are " + away + " amount away from free shipping. </a>";
    }
});


document.getElementById("carrot").addEventListener("click", function() {
    cartItemsTotalAmount += onionPrice;
    if(cartItemsTotalAmount >= freeShippingEligibility){
        freeShippingBar.style.color = "green";
            freeShippingBar.innerHTML = "<a href='#' style='color: green;'>You've claimed free shipping.</a>"
    }
    
    else if(cartItemsTotalAmount < freeShippingEligibility && cartItemsTotalAmount >= 12){
        var away = 75 - cartItemsTotalAmount;
        freeShippingBar.innerHTML = "<a href='#' style='color: blue;'>You are " + away + " amount away from free shipping. </a>";
    }
});

document.getElementById("beetroot").addEventListener("click", function() {
    cartItemsTotalAmount += BrinjalPrice;
    if(cartItemsTotalAmount >= freeShippingEligibility){
        freeShippingBar.style.color = "green";
            freeShippingBar.innerHTML = "<a href='#' style='color: green;'>You've claimed free shipping.</a>"
    }
    
    else if(cartItemsTotalAmount < freeShippingEligibility && cartItemsTotalAmount >= 12){
        var away = 75 - cartItemsTotalAmount;
        freeShippingBar.innerHTML = "<a href='#' style='color: blue;'>You are " + away + " amount away from free shipping. </a>";
    }
});

document.getElementById("beans").addEventListener("click", function() {
    cartItemsTotalAmount += potatoPrice;
    if(cartItemsTotalAmount >= freeShippingEligibility){
        freeShippingBar.style.color = "green";
            freeShippingBar.innerHTML = "<a href='#' style='color: green;'>You've claimed free shipping.</a>"
    }
    
    else if(cartItemsTotalAmount < freeShippingEligibility && cartItemsTotalAmount >= 12){
        var away = 75 - cartItemsTotalAmount;
        freeShippingBar.innerHTML = "<a href='#' style='color: blue;'>You are " + away + " amount away from free shipping. </a>";
    }
});

// third shop items price

document.getElementById("pumpkin").addEventListener("click", function() {
    cartItemsTotalAmount += tomatoPrice;
    if(cartItemsTotalAmount >= freeShippingEligibility){
        freeShippingBar.style.color = "green";
            freeShippingBar.innerHTML = "<a href='#' style='color: green;'>You've claimed free shipping.</a>"
    }
    
    else if(cartItemsTotalAmount < freeShippingEligibility && cartItemsTotalAmount >= 12){
        var away = 75 - cartItemsTotalAmount;
        freeShippingBar.innerHTML = "<a href='#' style='color: blue;'>You are " + away + " amount away from free shipping. </a>";
    }
});


document.getElementById("snake_gourd").addEventListener("click", function() {
    cartItemsTotalAmount += onionPrice;
    if(cartItemsTotalAmount >= freeShippingEligibility){
        freeShippingBar.style.color = "green";
            freeShippingBar.innerHTML = "<a href='#' style='color: green;'>You've claimed free shipping.</a>"
    }
    
    else if(cartItemsTotalAmount < freeShippingEligibility && cartItemsTotalAmount >= 12){
        var away = 75 - cartItemsTotalAmount;
        freeShippingBar.innerHTML = "<a href='#' style='color: blue;'>You are " + away + " amount away from free shipping. </a>";
    }
});

document.getElementById("lemon").addEventListener("click", function() {
    cartItemsTotalAmount += BrinjalPrice;
    if(cartItemsTotalAmount >= freeShippingEligibility){
        freeShippingBar.style.color = "green";
            freeShippingBar.innerHTML = "<a href='#' style='color: green;'>You've claimed free shipping.</a>"
    }
    
    else if(cartItemsTotalAmount < freeShippingEligibility && cartItemsTotalAmount >= 12){
        var away = 75 - cartItemsTotalAmount;
        freeShippingBar.innerHTML = "<a href='#' style='color: blue;'>You are " + away + " amount away from free shipping. </a>";
    }
});

document.getElementById("muskmelon").addEventListener("click", function() {
    cartItemsTotalAmount += potatoPrice;
    if(cartItemsTotalAmount >= freeShippingEligibility){
        freeShippingBar.style.color = "green";
            freeShippingBar.innerHTML = "<a href='#' style='color: green;'>You've claimed free shipping.</a>"
    }
    
    else if(cartItemsTotalAmount < freeShippingEligibility && cartItemsTotalAmount >= 12){
        var away = 75 - cartItemsTotalAmount;
        freeShippingBar.innerHTML = "<a href='#' style='color: blue;'>You are " + away + " amount away from free shipping. </a>";
    }
});

