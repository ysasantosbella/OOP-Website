/* =============================================
   CODE PREDICTION — codeprediction.js
   Purpose:
   - Validate user answers against correct ones
   - Provide immediate visual feedback (correct/incorrect)
   - Display score and motivational message
   - Allow retry/reset functionality
   ============================================= */

function checkPrediction() {
  // Define correct answers for each input field
  const answers = {
    p1: "woof",
    p2: "animal sound",
    p3: "toyota",
    p4: "7",
    p5: "hello"
  };

  let score = 0; // Tracks number of correct answers
  const total = Object.keys(answers).length; // Total number of questions

  // Loop through each input field and check user’s answer
  for (let id in answers) {
    const inputElement = document.getElementById(id);
    if (!inputElement) continue; // Skip if element not found

    const userInput = inputElement.value.trim().toLowerCase(); // Normalize input
    const isCorrect = userInput === answers[id]; // Compare with correct answer

    // Apply feedback styles (green for correct, red for incorrect)
    if (isCorrect) {
      score++;
      inputElement.style.borderColor = "#22c55e"; // Green border
      inputElement.style.backgroundColor = "rgba(34, 197, 94, 0.1)"; // Light green background
    } else {
      inputElement.style.borderColor = "#ef4444"; // Red border
      inputElement.style.backgroundColor = "rgba(239, 68, 68, 0.1)"; // Light red background
    }
  }

  // Clear any old result text
  const result = document.getElementById("result");
  if (result) {
    result.innerHTML = "";
  }

  // Display score and motivational message
  const scoreDiv = document.getElementById("scoreDiv");
  const scoreText = document.getElementById("scoreText");
  if (scoreDiv && scoreText) {
    const percentage = Math.round((score / total) * 100);
    let message = "";

    // Choose message based on performance
    if (percentage === 100) message = "Perfect score!";
    else if (percentage >= 80) message = "Great job!";
    else if (percentage >= 60) message = "Not bad, keep practicing!";
    else message = "Keep studying, you'll get there!";

    // Update score display
    scoreText.innerHTML = `
      <h2 style="font-weight: 800; margin-bottom: 10px;">You got ${score} / ${total}!</h2>
      <p style="font-size: 0.95rem; font-weight: 400; color: var(--gray-600); margin: 0;">${message}</p>
    `;
    scoreDiv.style.display = "block";
    scoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Add "Try Again" button if not already present
  if (!document.getElementById("retryBtn")) {
    const retryBtn = document.createElement("button");
    retryBtn.id = "retryBtn";
    retryBtn.className = "quiz-retry-btn";
    retryBtn.innerText = "Try Again";
    retryBtn.style.marginTop = "14px";

    // Reset quiz when retry button is clicked
    retryBtn.onclick = () => {
      // Reset all inputs to blank and remove feedback styles
      for (let id in answers) {
        const inputElement = document.getElementById(id);
        if (!inputElement) continue;
        inputElement.value = "";
        inputElement.style.borderColor = "";
        inputElement.style.backgroundColor = "";
      }

      // Hide score display
      const scoreDiv = document.getElementById("scoreDiv");
      if (scoreDiv) scoreDiv.style.display = "none";

      // Remove retry button itself
      document.getElementById("retryBtn").remove();

      // Scroll back to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Append retry button to score section
    document.getElementById("scoreDiv").appendChild(retryBtn);
  }
}
