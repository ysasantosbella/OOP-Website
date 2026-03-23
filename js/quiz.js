function checkQuiz() {

  let score = 0;

  const answers = {
    q1: "b",
    q2: "a",
    q3: "a",
    q4: "b",
    q5: "a",
    q6: "a",
    q7: "a",
    q8: "a"
  };

  for (let i = 1; i <= 8; i++) {
    const selected = document.querySelector('input[name="q' + i + '"]:checked');
    if (selected && selected.value === answers["q" + i]) {
      score++;
    }
  }

  let message = "";

  if (score === 8) {
    message = "Excellent! You mastered OOP concepts.";
  } else if (score >= 5) {
    message = "Good job! You understand most OOP concepts.";
  } else {
    message = "Review the OOP lessons again.";
  }

  const scoreEl = document.getElementById("score");
  scoreEl.innerHTML =
    "Your Score: " + score + " / 8<br>" +
    "<span class='score-message'>" + message + "</span>" +
    "<br><button class='quiz-retry-btn' onclick='resetQuiz()'>↺ Try Again</button>";

  // Trigger the CSS reveal animation
  scoreEl.classList.add("visible");

  // Scroll to result
  scoreEl.scrollIntoView({ behavior: "smooth", block: "center" });

  // Hide submit button
  document.querySelector(".quiz-submit-btn").style.display = "none";
}

function resetQuiz() {
  // Uncheck all radio buttons
  document.querySelectorAll('input[type="radio"]').forEach(function (input) {
    input.checked = false;
  });

  // Hide and clear score box
  const scoreEl = document.getElementById("score");
  scoreEl.classList.remove("visible");
  scoreEl.innerHTML = "";

  // Show submit button again
  document.querySelector(".quiz-submit-btn").style.display = "";

  // Scroll back to top of quiz
  document.getElementById("quizForm").scrollIntoView({ behavior: "smooth", block: "start" });
}