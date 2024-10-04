let numbersArray = [];
let input = window.prompt("Please enter 5 numbers separated by commas: ");


if (input) {
    let numbers = input.split(',');

    for (let i = 0; i < numbers.length; i++) {
        numbersArray.push(Number(numbers[i].trim()));
    }

} else {
    console.log("No input entered");
}


let max = numbersArray[0];
for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > max) {
        max = numbersArray[i];
    }
}


let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}


console.log('The total is: ' + sum);
console.log('The biggest number is: ' + max);