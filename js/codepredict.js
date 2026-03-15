let score = 0;

function checkAnswer1(){

let answer = document.getElementById("answer1").value.toLowerCase();

if(answer === "toyota"){

document.getElementById("result1").innerHTML = "✅ Correct!";
score++;

}else{

document.getElementById("result1").innerHTML = "❌ Incorrect";

}

}


function checkAnswer2(){

let answer = document.getElementById("answer2").value.toLowerCase();

if(answer === "animal sound"){

document.getElementById("result2").innerHTML = "✅ Correct!";
score++;

}else{

document.getElementById("result2").innerHTML = "❌ Incorrect";

}

}


function checkAnswer3(){

let answer = document.getElementById("answer3").value;

if(answer === "20"){

document.getElementById("result3").innerHTML = "✅ Correct!";
score++;

}else{

document.getElementById("result3").innerHTML = "❌ Incorrect";

}

}


function showScore(){

document.getElementById("score").innerHTML =
"Your Score: " + score + " / 3";

}