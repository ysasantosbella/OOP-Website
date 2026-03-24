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
q8: "a",
q9: "a",
q10: "b"
};

let correctText = {
q1: "A blueprint for creating objects",
q2: "An instance of a class",
q3: "Variables and methods",
q4: "Inheritance",
q5: "Dog inherits from Animal",
q6: "Hiding internal data",
q7: "To hide internal data",
q8: "Through public methods",
q9: "To act as a blueprint for objects",
q10: "An instance of a class"
};

for(let i = 1; i <= 10; i++){

let selected = document.querySelector('input[name="q'+i+'"]:checked');
let question = document.querySelector('input[name="q'+i+'"]');

// remove old feedback
let old = question.parentElement.querySelector(".feedback");
if(old){
old.remove();
}

let feedback = document.createElement("p");
feedback.className = "feedback";

if(selected){
if(selected.value === answers["q"+i]){
score++;
feedback.innerHTML = "Correct";
feedback.style.color = "green";
}
else{
feedback.innerHTML = "Wrong. Correct answer: " + correctText["q"+i];
feedback.style.color = "red";
}
}
else{
feedback.innerHTML = "No answer selected. Correct answer: " + correctText["q"+i];
feedback.style.color = "red";
}

question.parentElement.appendChild(feedback);

}

document.getElementById("score").innerHTML =
"Your Score: " + score + " / 10";

}