const buttons = document.querySelectorAll('button');

let wordPairs = [
  ["Topfen", "Quark"],
  ["Marille", "Aprikose"],
  ["Ribisel", "Johannisbeeren"]
];

const positiveFeedback = [
  "Correct!",
  "Excellent!",
  "Great job!",
  "Keep it up!",
  "On the right track!",
  "Nailed it! Are you sure you're not Austrian?",
  "You got it right!",
  "Maybe you should move to Vienna! You're a natural"
];

function getPositiveFeedback() {
  const randomIndex = Math.floor(Math.random() * positiveFeedback.length);
  return positiveFeedback[randomIndex];
}
function handleCorrectAnswer() {
  const feedbackText = document.getElementById('feedback-text');
  feedbackText.textContent = getPositiveFeedback();
}

const negativeFeedback = [
  "False",
  "Maybe next time, eh?",
  "That's not the typical Austrian word",
  "That's not the right option",
  "False...",
  "Incorrect",
  "No, it's actually the other option"
];

function getNegativeFeedback() {
  const randomIndex = Math.floor(Math.random() * negativeFeedback.length);
  return negativeFeedback[randomIndex];
}
function handleFalseAnswer() {
  const feedbackText = document.getElementById('feedback-text');
  feedbackText.textContent = getNegativeFeedback();
}

let happysmile = document.getElementById("image-container");
let newImage = document.createElement('img');
newImage.classList.add('img'); // Creating a class for CSS purposes

function getRandomWordPair() {
  const IndexChosenPair = Math.floor(Math.random() * wordPairs.length);
  const chosenPair=wordPairs[IndexChosenPair];
  wordPairs.splice(IndexChosenPair,1)
  return chosenPair;
}

function random0or1() {
  const randomDecimal = Math.random();  // Generate a random decimal between 0 and 1
  return Math.round(randomDecimal);  // Give me either 0 or 1
}
let CounterLottedPairs = 0; 
function setButtonTexts() {
  const chosenPair = getRandomWordPair();
  console.log(chosenPair);
  CounterLottedPairs++;
  console.log(CounterLottedPairs);
  let originallyLeftWord = chosenPair[0]; // The correct answer of a given wordPair
  let switchSides = random0or1(); // Randomly choose whether to switch sides or not

  buttons[0].textContent = switchSides ? chosenPair[1] : chosenPair[0];   // Assign words to buttons based on the switching decision
  buttons[1].textContent = switchSides ? chosenPair[0] : chosenPair[1];   // Assign words to buttons based on the switching decision

  buttons.forEach(button => button.disabled = false);   // Add click event listeners to both buttons
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const feedbackText = document.getElementById('feedback-text');
      if (button.textContent === originallyLeftWord) 
      {
        handleCorrectAnswer();
        newImage;
        newImage.src = 'Happysmile.png';
        happysmile.appendChild(newImage); 
      } else {
        handleFalseAnswer();
        newImage;
        newImage.src = 'Sadsmile.png';
        happysmile.appendChild(newImage); 
      }
      buttons.forEach(button => button.disabled = true); // Disable both buttons after the feedback
    });
  });
  createAndAppendContinueButton(); // Create and append the button after setting texts
}

function createAndAppendContinueButton() {
  const newButton = document.createElement('button'); // Create a new button
  newButton.classList.add('new-button'); // Creating a class for CSS purposes
  const feedbackContainer = document.getElementById('feedback-container');
  const AppendedNewButton = feedbackContainer.appendChild(newButton); // Append the new button to the container
  newButton.textContent = 'Click here to continue'; // Defining the text of the new button.
  // Add event listener for the new button
  newButton.addEventListener('click', () => {
    newImage.remove();
    AppendedNewButton.remove(); // Remove the button after it was clicked
    const feedbackText = document.getElementById('feedback-text');
    feedbackText.textContent = ''; // Clear feedback text
    if (CounterLottedPairs!=3) {
    setButtonTexts(); // Call setButtonTexts again for next word pair
    }
    else {
      alert("That's it!")
    }
  });
}

setButtonTexts(); // Call setButtonTexts to start the word pair presentation
