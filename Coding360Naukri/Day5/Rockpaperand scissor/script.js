 window.userScore = 0;
        window.computerScore = 0;

        function Computer() {
          // The array of choices, consistently using the plural 'scissors'.
          const choices = ["rock", "paper", "scissors"];
          const randomIndex = Math.floor(Math.random() * choices.length);
          return choices[randomIndex];
        }

        function Play(userChoice) {
          const computerChoice = Computer();
          const resultText = document.getElementById("res");
          const userScoreSpan = document.getElementById("user-score");
          const computerScoreSpan = document.getElementById("computer-score");
          
          let result = '';

          // 1. Check for a tie (no score update)
          if (userChoice === computerChoice) {
            result = "The Game has been tied";
          }
          // 2. Check for user win conditions (userScore++)
          else if (
              (userChoice === 'rock' && computerChoice === 'scissors') ||
              (userChoice === 'paper' && computerChoice === 'rock') ||
              (userChoice === 'scissors' && computerChoice === 'paper')
          ) {
            window.userScore++;
            result = "You have Won the game";
          } 
          // 3. Computer wins (user loses) (computerScore++)
          else {
            window.computerScore++;
            result = "You have lost the game";
          }

          // Update DOM elements with the new result and scores
          resultText.textContent = result;
          userScoreSpan.textContent = window.userScore;
          computerScoreSpan.textContent = window.computerScore;
          
          // Returning the result message is often required by the test framework
          return result;
        }

        // Attach event listeners to the buttons using their required IDs
        document.getElementById("rock").addEventListener("click", () => Play("rock"));
        document.getElementById("paper").addEventListener("click", () => Play("paper"));
        document.getElementById("scissors").addEventListener("click", () => Play("scissors"));
