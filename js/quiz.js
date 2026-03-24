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

let reviewHTML = "<h4 class='text-center mb-4'>Answer Review</h4>";

for(let i = 1; i <= 10; i++){

let selected = document.querySelector('input[name="q'+i+'"]:checked');

if(selected && selected.value === answers["q"+i]){
score++;
reviewHTML += `
<div style="color:green; margin-bottom:10px;">
Q${i}: Correct
</div>
`;
}
else{
reviewHTML += `
<div style="color:red; margin-bottom:10px;">
Q${i}: Wrong — Correct answer: ${correctText["q"+i]}
</div>
`;
}

}

document.getElementById("score").innerHTML =
"Your Score: " + score + " / 10";

document.getElementById("review").innerHTML = reviewHTML;


document.getElementById("review").scrollIntoView({
behavior: "smooth"
});

}