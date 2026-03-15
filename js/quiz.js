function checkQuiz(){

let score = 0;

let answers = {
q1: "b",
q2: "a",
q3: "a",
q4: "b",
q5: "a",
q6: "a",
q7: "a",
q8: "a"
};

for(let i = 1; i <= 8; i++){

let selected = document.querySelector('input[name="q'+i+'"]:checked');

if(selected && selected.value === answers["q"+i]){
score++;
}

}

let message = "";

if(score === 8){
message = "Excellent! You mastered OOP concepts.";
}
else if(score >= 5){
message = "Good job! You understand most OOP concepts.";
}
else{
message = "Review the OOP lessons again.";
}

document.getElementById("score").innerHTML =
"Your Score: " + score + " / 8<br>" + message;

}