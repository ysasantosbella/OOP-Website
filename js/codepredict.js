function checkPrediction(){

let score = 0;

let a1 = document.getElementById("p1").value.trim().toLowerCase();
let a2 = document.getElementById("p2").value.trim().toLowerCase();
let a3 = document.getElementById("p3").value.trim().toLowerCase();
let a4 = document.getElementById("p4").value.trim().toLowerCase();


if(a1 === "woof"){
score++;
}

if(a2 === "animal sound"){
score++;
}

if(a3 === "toyota"){
score++;
}

if(a4 === "7"){
score++;
}

document.getElementById("result").innerHTML =
"Your Score: " + score + " / 4";

}