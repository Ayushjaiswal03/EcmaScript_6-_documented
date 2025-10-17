 function convertTemperature() {
        const celsiusInput = document.getElementById("celsius").value;
        const celsius = parseFloat(celsiusInput);
        const resultDiv = document.getElementById("result");
        
        if (isNaN(celsius) || celsiusInput.trim() === "") {
            resultDiv.textContent = "Please enter a valid Celsius temperature.";
            return;
        }

        const fahrenheit = (celsius * 9 / 5) + 32;

        const formattedFahrenheit = fahrenheit.toFixed(2);
        
        resultDiv.textContent = `Fahrenheit: ${formattedFahrenheit}`;
    };