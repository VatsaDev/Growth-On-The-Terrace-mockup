var QuoteArray = [
  "The clearest way into the Universe is through a forest wilderness.",
  "We can begin the restructuring of thought by declaring legitimate what we have denied for so long",
  "We are made for loving",
  "I remember my childhood names for grasses and secret flowers.",
];

var PlantArray = [
  "tomatoes",
  "carrots",
  "potatoes",
  "pine sapling",
  "pink maple",
  "neem",
  "money plant",
  "tulsi",
  "Aloe",
  "lily",
  "cactus (mini)",
  "bougainvillea",
  "fern",
  "morning glory",
  "petunias",
  "mushroom",
];

var User = localStorage.getItem("gt-username");
var IntroName = document.getElementById("user");

var Quote = QuoteArray[Math.floor(Math.random() * QuoteArray.length)];
var Plant1 = PlantArray[Math.floor(Math.random() * PlantArray.length)];
var Plant2 = PlantArray[Math.floor(Math.random() * PlantArray.length)];
var Plant3 = PlantArray[Math.floor(Math.random() * PlantArray.length)];

document.getElementById("user").innerHTML = User;
document.getElementById("quote").innerHTML = Quote;
document.getElementById("rec-1").innerHTML = Plant1;
document.getElementById("rec-2").innerHTML = Plant2;
document.getElementById("rec-3").innerHTML = Plant3;
document.getElementById("champ-box").innerHTML =
  "<img src = '../resources/plant-imgs/plant-1.svg' alt = 'img one'>";
