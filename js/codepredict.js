function checkPrediction() {
    const answers = {
        p1: "Woof",
        p2: "Animal sound",
        p3: "Toyota",
        p4: "7"
    };

    let score = 0;
    const total = Object.keys(answers).length;


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

    const scoreDiv = document.getElementById('score');
    const scoreText = document.getElementById('scoreText');

    if (scoreDiv && scoreText) {
        scoreText.innerHTML = `<h2 style="font-weight: 800; margin-bottom: 10px;">You got ${score} / ${total}!</h2>`;
        scoreDiv.style.display = "block";
        scoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}