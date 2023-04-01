const form = document.querySelector('form');
const q1Result = document.querySelector('#q1result');
const q2Result = document.querySelector('#q2result');
const q3Result = document.querySelector('#q3result');
const q4Result = document.querySelector('#q4result');
const q5Result = document.querySelector('#q5result');
const q1Correct = document.createElement('span');
const q2Correct = document.createElement('span');
const q3Correct = document.createElement('span');
const q4Correct = document.createElement('span');
const q5Correct = document.createElement('span');
/**const timeDisplay = document.querySelector('#time');**/
const preloader=document.querySelector(".preloader");

window.addEventListener("load",() => {
    setTimeout(() => {
        preloader.style.display="none";
    },2000);
})

q1Correct.textContent = 'Bill';
q2Correct.textContent = 'Port key';
q3Correct.textContent = 'Ireland';
q4Correct.textContent = 'He is under the age of seventeen';
q5Correct.textContent = 'Muggle';

let timeLeft = 32; // set time left for the quiz in seconds
let countdown; // variable to hold the setInterval ID

// function to update the timer display
/**function updateTimer() {
	if (timeLeft > 0) {
		timeLeft--;
		timeDisplay.textContent = `Time left: ${timeLeft} seconds`;
	} else {
		clearInterval(countdown);
		alert('Time is up!');
		form.submit();
	}
}

// start the timer countdown
countdown = setInterval(updateTimer, 1000);**/
// Get the countdown element
var countdownElement = document.getElementById("countdown");

// Update the countdown element every second
var countdownInterval = setInterval(function() {
  timeLeft--;
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 30;
  countdownElement.innerHTML = pad(minutes) + ":" + pad(seconds);

  // Stop the timer when it reaches 0
  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    alert("Time's up!");
	document.getElementById("quiz-form").onsubmit();
  }
}, 1000);

// Add leading zeros to numbers less than 10
function pad(num) {
  return num < 10 ? "0" + num : num;
}

form.addEventListener('submit', function(event) {
	event.preventDefault();
	clearInterval(countdown); // stop the timer countdown
	const q1Value = document.querySelector('input[name="q1"]:checked').value;
	const q2Value = document.querySelector('input[name="q2"]:checked').value;
    const q4Value = document.querySelector('input[name="q4"]:checked').value;
    const q5Value = document.querySelector('input[name="q5"]:checked').value;
    const q3Value = document.querySelector('input[name="q3"]:checked').value;


	if (q1Value === 'b') {
		q1Result.textContent = 'Correct!';
		q1Result.classList.add('correct');
	} else {
		q1Result.textContent = 'Incorrect. The correct answer is:';
		q1Result.classList.add('incorrect');
		q1Result.appendChild(q1Correct);
	}

	if (q2Value === 'b') {
		q2Result.textContent = 'Correct!';
		q2Result.classList.add('correct');
	} else {
		q2Result.textContent = 'Incorrect. The correct answer is:';
		q2Result.classList.add('incorrect');
		q2Result.appendChild(q2Correct);
	}

    if (q3Value === 'a') {
		q3Result.textContent = 'Correct!';
		q3Result.classList.add('correct');
	} else {
		q3Result.textContent = 'Incorrect. The correct answer is:';
		q3Result.classList.add('incorrect');
		q3Result.appendChild(q3Correct);
	}


    if (q4Value === 'b') {
		q4Result.textContent = 'Correct!';
		q4Result.classList.add('correct');
	} else {
		q4Result.textContent = 'Incorrect. The correct answer is:';
		q4Result.classList.add('incorrect');
		q4Result.appendChild(q4Correct);
	}

    
    if (q5Value === 'd') {
		q5Result.textContent = 'Correct!';
		q5Result.classList.add('correct');
	} else {
		q5Result.textContent = 'Incorrect. The correct answer is:';
		q5Result.classList.add('incorrect');
		q5Result.appendChild(q5Correct);
	}

	// disable the radio buttons after submitting the form
	const radioButtons = document.querySelectorAll('input[type="radio"]');
	radioButtons.forEach(function(radioButton) {
		radioButton.disabled = true;
	});
});
