function filterPrimes() {
    let input = document.getElementById("arrayInput").value;

    let numbers = input.split(",").map(num => parseInt(num.trim())).filter(n => !isNaN(n));
    console.log(numbers);

    function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Filter only primes
  let primes = numbers.filter(isPrime);

  // Format result as [2, 3, 5]
  let formatted = "[" + primes.join(", ") + "]";

  // Display result
  document.getElementById("result").textContent = formatted;
}