const buttons = document.querySelectorAll('button'); // Access the buttons from the html file
let CorrectAnswers = 0; 
let Score; 
let wordPairs = [
  ["Topfen", "Quark"],
  ["Marille", "Aprikose"],
  ["Ribisel", "Johannisbeeren"],
  ["Schlagobers", "Sahne"],
  ["Heuriger", "Weinstube"],
  ["Palatschinken", "Pfannkuchen"],
  ["Gugelhupf", "Napfkuchen"],
  ["Semmel", "Brötchen"],
  ["Melanzani", "Aubergine"],
  ["Vogerlsalat", "Feldsalat"],
  ["Kren", "Meerrettich"],
  ["Buchteln", "Ofennudeln"],
  ["Rauchfangkehrer", "Schornsteinfeger"],
  ["Eierschwammerl", "Pfifferlinge"],
  ["Powidl", "Pflaumenmus"],
  ["Stiegen", "Treppen"],
  ["Pölster", "Kopfkissen"],
  ["Mahlzeit", "Guten Appetit"],
  ["Spital", "Krankenhaus"],
  ["Sackerl", "Tüten"],
  ["Paradeiser", "Tomate"],
  ["Kukuruz", "Mais"],
  ["Haberer", "Kumpel"],
  ["Leiwand", "Großartig"]
]; // The word pairs for the quiz. The correct word is saved in the 0th index of every element.
const ArraySize=wordPairs.length; //Save the array length. 
const positiveFeedback = [
  "Correct!",
  "Amazing!",
  "You're awesome!",
  "Excellent!",
  "Great job!",
  "Keep it up!",
  "You're on the right track!",
  "Nailed it! Are you sure you're not Austrian?",
  "You got it right!",
  "Maybe you should move to Vienna!",
  "You're a natural!"
]; 
function getPositiveFeedback() {
  const randomIndex = Math.floor(Math.random() * positiveFeedback.length);
  return positiveFeedback[randomIndex];
} // Lot a positive feedback for a correct answer
function handleCorrectAnswer() {
  const feedbackText = document.getElementById('feedback-text');
  feedbackText.textContent = getPositiveFeedback();
} // Insert the positive feedback in the html file

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
} // Lot a negative feedback for a false answer
function handleFalseAnswer() {
  const feedbackText = document.getElementById('feedback-text');
  feedbackText.textContent = getNegativeFeedback();
} // Insert the negative feedback in the html file

let happysmile = document.getElementById("image-container"); // Access the image container in the html file 
let newImage = document.createElement('img'); // Create an img element inside the image container
newImage.classList.add('img'); // Create a class for CSS purposes

function getRandomWordPair() {
  const IndexChosenPair = Math.floor(Math.random() * wordPairs.length);
  const chosenPair=wordPairs[IndexChosenPair];
  wordPairs.splice(IndexChosenPair,1)
  return chosenPair;
} // Choose a random word pair from the wordPairs array and remove the chosen word pair from the array

function random0or1() {
  const randomDecimal = Math.random(); 
  return Math.round(randomDecimal);  
} // Give randomly either 1 or 0

let CounterLottedPairs = 0;  // Count the number of pairs that have been lotted

// Insert two words to the buttons and provide a feedback by clicking on one of them: // 
function setButtonTexts() {
  const chosenPair = getRandomWordPair(); // Take a random word pair from the array
  console.log(chosenPair);
  CounterLottedPairs++; // Add the word pair to the count of lotted pairs
  console.log(CounterLottedPairs);
  let originallyLeftWord = chosenPair[0]; // The correct answer of a given wordPair
  
  let switchSides = random0or1(); // Randomly choose whether to switch sides or not
  buttons[0].textContent = switchSides ? chosenPair[1] : chosenPair[0];   
  buttons[1].textContent = switchSides ? chosenPair[0] : chosenPair[1];   

  buttons.forEach(button => button.disabled = false);   // Enable clicking on each button
  buttons.forEach((button, index) =>  // Provide a feedback after a word is clicked. 
  { 
    button.addEventListener('click', () => {
      if (button.textContent === originallyLeftWord) 
      {
        CorrectAnswers++; 
        handleCorrectAnswer();
        newImage;
        newImage.src = 'Happysmile.jpg';
        happysmile.appendChild(newImage);
        button.style.backgroundImage = "url(flagaustria.png)"; 
        button.style.backgroundSize = "cover"; 
        document.getElementById("feedback-text").style.color = "rgb(98, 93, 93)";  
        document.getElementById("feedback-text").style.webkitTextFillColor="white"; 
      } else {
        document.getElementById("feedback-text").style.color = "black";  
        document.getElementById("feedback-text").style.webkitTextFillColor="#FFCF00"; 
        handleFalseAnswer();
        const feedbackText = document.getElementById('feedback-text');
        feedbackText.textContent = getNegativeFeedback();
        newImage;
        newImage.src = 'Sadsmile.jpg';
        happysmile.appendChild(newImage); 
        button.style.backgroundImage = "url(germany.png)"; 
        button.style.backgroundSize = "cover"; 
      }
      buttons.forEach(button => button.disabled = true); // Disable both buttons after the feedback
    });
  });
  createAndAppendContinueButton(); // Create and append the continue button after setting texts
}

function createAndAppendContinueButton() {
  const newButton = document.createElement('button'); // Create a new button
  newButton.classList.add('new-button'); // Create a class for CSS purposes
  const feedbackContainer = document.getElementById('feedback-container'); // Access the feedback container in the html file
  const AppendedNewButton = feedbackContainer.appendChild(newButton); // Append the newly created button to the container
  newButton.textContent = 'Click here to continue'; // Define the text of the new button

  newButton.addEventListener('click', () => // Add event listener for the new button
  { 
    newImage.remove(); // remove the smile image
    AppendedNewButton.remove(); // Remove the new button 
    const feedbackText = document.getElementById('feedback-text');
    feedbackText.textContent = ''; // Clear feedback text
    buttons.forEach((button,index) => {
      button.style.backgroundImage = ""; 
      button.style.backgroundSize = ""; 
    }); 
    if (CounterLottedPairs!=ArraySize) {
    setButtonTexts(); // Call setButtonTexts again for next word pair
    }
    else { // Game is over
      buttons.forEach((button, index) => {
          button.remove(); // Remove the two buttons of the word pairs
       } )
    const pagetitle0 = document.getElementById('endtext0');
    const pagetitle1 = document.getElementById('endtext1');
    const pagetitle2 = document.getElementById('endtext2');
    document.getElementById('maintext').remove();
  
    if (Number.isInteger((CorrectAnswers/ArraySize)*100)) // In case of an integer score
    {
     Score=(CorrectAnswers/ArraySize)*100; 
    } 
    else {
      Score = ((CorrectAnswers/ArraySize)*100).toFixed(2); // In case of a decimal score
    }
console.log(Score);
    if (Score===100) 
    {
      pagetitle0.innerHTML="Your score is: " + Score +"<br>"; 
      pagetitle1.innerHTML="You answered "+CorrectAnswers+ " times correctly out of " +ArraySize+". <br>"; 
      pagetitle2.innerHTML="I guess you are a native speaker!"; 
      
    }
    else if (70<Score && Score<100) 
    {
      pagetitle0.innerHTML="Your score is: " + Score +"<br>"; 
      pagetitle1.innerHTML="You answered "+CorrectAnswers+ " times correctly out of " +ArraySize+". <br>"; 
      pagetitle2.innerHTML="Good job!";     
    }
    else
    {
      pagetitle0.innerHTML="Your score is: " + Score +"<br>"; 
      pagetitle1.innerHTML="You answered "+CorrectAnswers+ " times correctly out of " +ArraySize+". <br>"; 
      pagetitle2.innerHTML="You can try again!";          
    }

    
  const newButton = document.createElement('button'); // Create a new button
  newButton.classList.add('endbutton'); // Create a class for CSS purposes
  const feedbackContainer = document.getElementById('feedback-container'); // Access the feedback container in the html file
  const AppendedNewButton = feedbackContainer.appendChild(newButton); // Append the newly created button to the container
  newButton.textContent = 'Click here to play again'; // Define the text of the new button
  newButton.addEventListener('click', () => {location.reload();}) // Refresh the page to restart the game
    }
  });
}

setButtonTexts(); // Call setButtonTexts to start the word pair presentation
