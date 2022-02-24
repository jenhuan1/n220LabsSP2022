//Jennifer Huang
//2/24/2022
//n220

//retrieves div with id "fav"
let favDiv = document.getElementById("fav");

//array that stores my favorite things
let favorites = ["Webtoons", "Music", "Genshin", "Books", "K/C Dramas"];

//loop goes for as long as the array is + prints each array value
for (let i = 0; i < favorites.length; i++) {
    favDiv.innerHTML += favorites[i] + ", is one of my favorite things.<br>"
}