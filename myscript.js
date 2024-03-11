
  const buttons = document.querySelectorAll('button');

  let wordPairs = [
    ["Jänner", "Januar"],
    ["Erdapfel", "Kartoffel"],
    ["Sackerl", "Tüte"] ];

  function getRandomWordPair() {
    const randomIndex = Math.floor(Math.random() * wordPairs.length); // Get random index
    return wordPairs[randomIndex]; // Return the word pair at the chosen index
  }


  function random0or1() {
    // Generate and round a random decimal between 0 and 1
    const randomDecimal = Math.random();
    return Math.round(randomDecimal);
  }

  function setButtonTexts() {
    const chosenPair = getRandomWordPair();
    const originallyLeftWord = chosenPair[0];

    // Randomly choose whether to switch sides or not
    const switchSides = random0or1();

    // Assign words based on the switching decision
    buttons[0].textContent = switchSides ? chosenPair[1] : chosenPair[0];
    buttons[1].textContent = switchSides ? chosenPair[0] : chosenPair[1];

    // Add click event listeners to both buttons
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const feedbackText = document.getElementById('feedback-text');
        const feedbackContainer = document.getElementById('feedback-container');

        if (button.textContent === originallyLeftWord) {
          // Clicked on the originally left word (correct)
          feedbackText.textContent = 'Correct!';
        } else {
          feedbackText.textContent = 'False!';
        }
    
        // Create the additional button
        const newButton = document.createElement('button');
        newButton.classList.add('new-button');
        newButton.textContent = 'Click here to continue'; // Or any desired text
        
        // Add event listener for the new button (optional)
        newButton.addEventListener('click', () => {
          // Perform actions when the added button is clicked
          window.location.reload(); // Reload the page, for example
        });
    
        // Append the button to the container
        feedbackContainer.appendChild(newButton);
        // Disable both buttons after the feedback and button creation
        buttons.forEach(button => button.disabled = true);

      });
    });
    
  }

  // Call the function initially to set initial texts
  setButtonTexts();

