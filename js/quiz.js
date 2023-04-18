const submitBtn = document.getElementById('submitBtn');
const feedback = document.getElementById('feedback');
const radioButtons = document.querySelectorAll('input[type="radio"]');
submitBtn.addEventListener('click', () => {
    // get user answers
    const answer1 = document.querySelector('input[name="answer1"]:checked');
    const answer2 = document.querySelector('input[name="answer2"]:checked');
    const answer3 = document.querySelector('input[name="answer3"]:checked');
    // check if all questions are answered
    if (!answer1 || !answer2 || !answer3) {
        alert('Please answer all questions.');
    } 
    else {
    // check answers
    const correctAnswers = ['A', 'A', 'D']; 
    const userAnswers = [answer1.value, answer2.value, answer3.value]; 
    let score = 0; 
    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
        }
    }

    if (score === 3) {
      feedback.textContent = `Congratulations! You scored ${score}/3. You got all answers correct!`;
    } 
    else {
      feedback.textContent = `You scored ${score}/3. Better luck next time!`;
    }
    } 
});

// 'enter' key event listener to radio buttons
for (let i = 0; i < radioButtons.length; i++) {
    const radioButton = radioButtons[i];
    radioButton.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            radioButton.click();
        }
    });
}
