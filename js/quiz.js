function checkQuiz() {
  const answers = {
    q1: 'b',
    q2: 'a',
    q3: 'a',
    q4: 'b',
    q5: 'a',
    q6: 'a',
    q7: 'a',
    q8: 'a'
  };

  let score = 0;
  const total = Object.keys(answers).length;
  const reviewDiv = document.getElementById('review');
  reviewDiv.innerHTML = ''; // clear previous reviews

  for (let i = 1; i <= total; i++) {
    const q = 'q' + i;
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    const userAnswer = selected ? selected.value : '';
    const isCorrect = userAnswer === answers[q];
    if (isCorrect) score++;

    // Get text of correct answer
    const correctText = document.querySelector(`input[name="${q}"][value="${answers[q]}"] + span`).innerText;
    const userText = selected ? selected.nextElementSibling.innerText : 'No answer selected';

    // Create review card
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.style.borderColor = isCorrect ? 'green' : 'red';

    card.innerHTML = `
      <h5>Q${i}: ${isCorrect ? 'Correct' : 'Wrong'}</h5>
      <p><strong>Your answer:</strong> <span style="color:${isCorrect ? 'green' : 'red'}">${userText}</span></p>
      <p><strong>Correct answer:</strong> <span style="color:green">${correctText}</span></p>
    `;
    reviewDiv.appendChild(card);
  }

  // Show score
  const scoreDiv = document.getElementById('score');
  scoreDiv.innerHTML = `Your Score: ${score} / ${total}`;
  scoreDiv.classList.add('visible');

  // Add retry button
  const retryBtn = document.createElement('button');
  retryBtn.className = 'quiz-retry-btn';
  retryBtn.innerText = 'Try Again';
  retryBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('quizForm').reset();
    reviewDiv.innerHTML = '';
    scoreDiv.classList.remove('visible');
  };
  reviewDiv.appendChild(retryBtn);

  // Scroll to review cards
  reviewDiv.scrollIntoView({ behavior: 'smooth' });
}