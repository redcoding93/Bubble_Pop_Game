// Global variables
  // Set all css "bubble" classes to an array
  const bubbleArray = document.querySelectorAll('.bubble');
  // Set audio element to a variable
  const pop = document.getElementById("popSound");
  // Set progress bar element to a variable
  const progressBar = document.getElementById('progress')
  // Set the "score" variable to 0
  var score = 0;
  // Set the "time" counter which will decrease in intervals below
  var time = 100;
  // Global placeholder for timer intervals
  var timer = 0;

// For each "bubble" in the array, do the following in the code block
bubbleArray.forEach(bubble => {
  // If this "bubble" is clicked
  bubble.addEventListener('click', function clickBubble(event) {
    // Add the "popped" css, which just hides the bubble
    bubble.classList.add('bubblePopped');
    // Set the "popSound" audio time to 0:00 seconds
    pop.currentTime = 0;
    // Play the "popSound" audio
    pop.play(); 
    // Increase the "score" variable by 1
    score++;
    // Display the current "score" variable
    document.getElementById('score').innerHTML = score;
    // Display the current "time" remaining
    document.getElementById('time').innerHTML = time;
  });
});

// When the "start" button is pressed, do the following in the code block
function startGame() {
  // Clear any timer intervals set so they do not overlap
  clearInterval(timer);
  // Reset the "score" variable to 0
  score = 0;
  // Reset the "time" counter back to full
  time = 90;
  // Reset the progress bar back to 100%
  progressBar.style.width = "100%";
  progressBar.ariaValueNow = 100;
  // Display the current "score" variable on page, setting back to 0
  document.getElementById('score').innerHTML = score;
  // Display the current "time" counter on page, setting back to 100
  document.getElementById('time').innerHTML = time;
  // For each "bubble" in the array, do the following in the code block
  bubbleArray.forEach(bubble => {
    // Remove the "popped" css, remember, we are reseting the game
    bubble.classList.remove('bubblePopped');
    // Add the "blown" css, remember, we are reseting the game
    bubble.classList.add('bubbleBlown');
  });
  // Set the interval rate at which the "time" counter decreases
  // 1 second = 1000 miliseconds
  timer = setInterval(countdown, 100)
}

// The "countdown" function for the "time" counter
function countdown(){
  // For every tick of the "time" counter, do the following in the code block
  // If "time" has not reached 0 & the "score" is less than 12
  if (time > 0 && score < 12){
    // Reduce the "time" variable by 1
    time--;
    // Display the current "time" variable
    document.getElementById('time').innerHTML = time;
    // Adjust the width of the progress bar based on the "time" variable
    progressBar.style.width = time+"%";
    progressBar.ariaValueNow = time; 
  } else {
    // If the "time" variable has reached 0 or the "score" variable has reached 12
    // Clear the looping "timer" interval, stopping the "time" countdown
    clearInterval(timer)
    // For each "bubble" in the array, do the following in the code block
    bubbleArray.forEach(bubble => {
      // Remove the "popped" css, remember, we are reseting the game
      bubble.classList.remove('bubbleBlown');
      // Add the "blown" css, remember, we are reseting the game
      bubble.classList.add('bubblePopped');
      // Adjust the width of the progress bar resetting it back to 100
      progressBar.style.width = "100%";
      progressBar.ariaValueNow = 100;
    });
  }
}
