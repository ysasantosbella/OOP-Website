function checkPrediction() {
    const answers = {
        p1: "Woof",
        p2: "Animal sound",
        p3: "Toyota",
        p4: "7"
    };

<<<<<<< HEAD
    let score = 0;
    const total = Object.keys(answers).length;

=======
let score = 0;

let a1 = document.getElementById("p1").value.trim().toLowerCase();
let a2 = document.getElementById("p2").value.trim().toLowerCase();
let a3 = document.getElementById("p3").value.trim().toLowerCase();
let a4 = document.getElementById("p4").value.trim().toLowerCase();
let a5 = document.getElementById("p5").value.trim().toLowerCase();
>>>>>>> 882688ad0c960fca5d3dec5036647469d9e7a5c6

    for (let id in answers) {
        const inputElement = document.getElementById(id);
        if (!inputElement) continue; 

        const userInput = inputElement.value.trim();
        
        if (userInput.toLowerCase() === answers[id].toLowerCase()) {
            score++;
            inputElement.style.borderColor = "#22c55e"; 
            inputElement.style.backgroundColor = "rgba(34, 197, 94, 0.1)"; 
        } else {
            inputElement.style.borderColor = "#ef4444"; 
            inputElement.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
        }
    }

<<<<<<< HEAD
    const scoreDiv = document.getElementById('score');
    const scoreText = document.getElementById('scoreText');
=======
if(a3 === "toyota"){
score++;
}

if(a4 === "7"){
score++;
}

if(a5 === "hello"){
score++;
}

document.getElementById("result").innerHTML =
"Your Score: " + score + " / 5";
>>>>>>> 882688ad0c960fca5d3dec5036647469d9e7a5c6

    if (scoreDiv && scoreText) {
        scoreText.innerHTML = `<h2 style="font-weight: 800; margin-bottom: 10px;">You got ${score} / ${total}!</h2>`;
        scoreDiv.style.display = "block";
        scoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}