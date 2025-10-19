 function generateRandomColorCode() {
            // Generates a random integer up to 16777215 (FFFFFF in decimal)
            const randomInt = Math.floor(Math.random() * 16777215); 
            
            // Converts the integer to its hexadecimal string representation
            let hexCode = randomInt.toString(16); 
            
            // Ensures the hex code is exactly 6 characters long by padding with leading zeros
            // Example: 1A becomes 00001A
            hexCode = hexCode.padStart(6, '0'); 
            
            return `#${hexCode}`;
        }

        /**
         * Generates a new random color, updates the DOM with the color code,
         * and applies the color to the browser body.
         */
        function changeColor() {
            // Generate the new hex code
            const newColor = generateRandomColorCode();

            // 1. Fill the body of the browser with the color
            document.body.style.backgroundColor = newColor;

            // 2. Display the random hex code
            document.getElementById('color').textContent = newColor;
        }

        // Initial call to set a color on page load, mirroring the UI reference
        changeColor();