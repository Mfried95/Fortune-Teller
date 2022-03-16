





////////// Fortune message array ///////////
let message = [
  "We dont know the future, but here is a cookie",
  "The road to riches is paved with homework",
  "Actions speak louder than fortune cookies",
  "Some men dream of fortunes, others dream of cookies",
  "Never wear your best pants when you go to fight for freedom",
  "Hard work pays off in the future. Laziness pays off now",
  "You can always find happiness at work on Friday",
  "The world may be your oyster, but it doesn't mean you'll get its pearl",
  "He who throws dirt is losing ground",
  "Fortune not found? Abort, Retry, Ignore",
  "All fortunes are wrong except this one",
  "Avoid taking unnecessary gambles. Lucky numbers: 12, 15, 23, 28, 37",
  "Ask your mom instead of a cookie",
  "If a turtle doesnt have a shell, is it naked or homeless?",
  "You think its a secret, but they know.",
  "Dont let statistics do a number on you.",
  "Never forget a friend. Especially if he owes you.",
  "He who laughs last is laughing at you.",
  "You think its a secret, but they know.",
  "Change is inevitable, except for vending machines.",
  "Some fortune cookies contain no fortune.",
  ]


alert("Ages 50+ are given a random fortune, all other ages are assigned based on you're age")



/////// Functions///////
function submitBtn() {
  let inputValue = document.getElementById("number").value 
  let futureMsg = document.getElementById("future") 
  


  if (inputValue < 5){
    futureMsg.innerText = message[0]
    return;
  } else if (inputValue < 10){
    futureMsg.innerText = message[1]
    return;
  } else if (inputValue  < 15){
    futureMsg.innerText = message[2]
    return;
  } else if (inputValue < 20){
    futureMsg.innerText = message[3]
    return;
  } else if (inputValue < 25){
    futureMsg.innerText = message[4]
    return;
  } else if (inputValue < 30){
    futureMsg.innerText = message[5]
    return;
  } else if (inputValue < 35){
    futureMsg.innerText = message[6]
    return;
  } else if (inputValue < 40){
    futureMsg.innerText = message[7]
    return;
  } else if (inputValue < 45){
    futureMsg.innerText = message[8]
    return;
  } else if (inputValue < 50){
    futureMsg.innerText = message[9]
    return;
  } else if (inputValue >= 50){  /// Will choose random message if age is equal to or higher than the given value 
    let randomIndex = Math.floor( Math.random() * 21)
    return futureMsg.innerText = message[randomIndex]
  }
   
}








