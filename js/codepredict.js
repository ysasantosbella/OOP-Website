document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.checked = true;
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});

function checkPrediction() {
    let score = 0;
    const answers = {
        p1: "woof",
        p2: "animal sound",
        p3: "toyota",
        p4: "7"
    };

    for (let id in answers) {
        const input = document.getElementById(id);
        if (input) {
            const val = input.value.trim().toLowerCase();
            if (val === answers[id]) {
                score++;
                input.style.borderColor = "#28a745";
            } else {
                input.style.borderColor = "#dc3545";
            }
        }
    }

    const scoreDiv = document.getElementById("score");
    const scoreText = document.getElementById("scoreText");

    if (scoreDiv && scoreText) {
        scoreText.innerHTML = `Your Score: ${score} / 4`;
        scoreDiv.classList.add("visible");
        scoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}