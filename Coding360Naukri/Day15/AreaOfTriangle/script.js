 function calculateArea() {
            const sideAInput = document.getElementById('sideA');
            const sideBInput = document.getElementById('sideB');
            const sideCInput = document.getElementById('sideC');
            const resultDiv = document.getElementById('result');

            // 1. Retrieve values and convert them to numbers
            const a = parseFloat(sideAInput.value);
            const b = parseFloat(sideBInput.value);
            const c = parseFloat(sideCInput.value);

            // Basic validation
            if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
                resultDiv.textContent = 'Please enter valid positive numbers for all three sides.';
                resultDiv.className = 'mt-6 p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg font-medium text-center';
                return;
            }

            // 2. Triangle Inequality Theorem check
            // The sum of the lengths of any two sides of a triangle must be greater than the length of the third side.
            if (a + b <= c || a + c <= b || b + c <= a) {
                resultDiv.textContent = 'Invalid triangle: The sum of any two sides must be greater than the third side.';
                resultDiv.className = 'mt-6 p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg font-medium text-center';
                return;
            }

            // 3. Apply Heron's Formula (from area_of_triangle.md)
            
            // Step A: Calculate the semi-perimeter (s)
            const s = (a + b + c) / 2;

            // Step B: Calculate the Area (A)
            const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

            // 4. Display the result
            const roundedArea = area.toFixed(2);
            resultDiv.textContent = `The area of the triangle is ${roundedArea} square units.`;
            resultDiv.className = 'mt-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg font-medium text-center';
        }