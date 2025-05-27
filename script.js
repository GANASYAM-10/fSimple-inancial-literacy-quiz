// Correct answers
const correctAnswers = {
    q1: 'c', // Partial ownership in a company
    q2: 'a', // Return On Investment
    q3: 'b', // A market where prices are rising
    q4: 'b', // Spreading investments across various assets
    q5: 'b'  // A portion of company profits paid to shareholders
};

// Form submission handler
document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let score = 0;
    const formData = new FormData(this);
    
    // Check each answer
    for (let [question, answer] of formData.entries()) {
        if (correctAnswers[question] === answer) {
            score++;
        }
    }
    
    // Show results
    document.getElementById('quiz-form').style.display = 'none';
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('score').textContent = score;
});