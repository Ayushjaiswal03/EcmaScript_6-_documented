function generateArrayOfString() {
    const inputText = document.getElementById('inputPara').value;
    const arr = inputText.split(' ');
    console.log(arr);
    const resultString = '[' + arr.join(',') + ']';
    console.log(resultString);
    document.getElementById('result').textContent = resultString;

}