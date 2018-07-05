//http://www.codewars.com/kata/highest-and-lowest/train/javascript

function highAndLow(numbers){
    console.log(numbers);
    let numberArray = numbers.split(" ");
    console.log(numberArray);
    
    let min = parseInt(numberArray[0]);
    let max = parseInt(numberArray[0]);
    
    console.log("array len: " + numberArray.length);

    for (let i = 0; i < numberArray.length; i++) {
        console.log(numberArray[i])
        if (parseInt(numberArray[i]) <= min) {
            min = numberArray[i];
            console.log("war 1 speln, min = " + min);
        }
        if (parseInt(numberArray[i]) >= max) {
            max = numberArray[i];
            console.log("war 2 speln, max = " + max);
        }
    }
    return max + " " + min;
    }

