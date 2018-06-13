var readline = require('readline');

var weapon = readline.createInterface(process.stdin, process.stdout, null);

var chooseComputerWeapon = () => {
    var randomNumber = Math.random();
    if (randomNumber < 0.5) {
        return 'scissors';
    } else if (randomNumber < 0.8) {
        return 'rock';
    }
    return 'paper';
}

const inputValidation = (someInput) => {
    if ((someInput === 'rock') || (someInput === 'paper') || (someInput === 'scissors')) {
        return ("You have chosen: " + someInput);
    } else {
    return "Bad input!";
    }
}

const computeWinner = (arg1, arg2) => {
    switch(arg1) {
        case "scissors":
                if (arg2 === 'scissors') { 
                    return "REMIS";
                } else if (arg2 === 'paper') { 
                    return "WYGRANA";
                } else if (arg2 === 'rock') {
                    return "PRZEGRANA";
                }
                break;            
        case "rock":
                if (arg2 === 'scissors') { 
                        return "WYGRANA";
                    } else if (arg2 === 'paper') { 
                        return "PRZEGRANA";
                    } else if (arg2 === 'rock') {
                        return "REMIS";
                    }
                    break;
        case "paper":
                    if (arg2 === 'scissors') { 
                        return "PRZEGRANA";
                    } else if (arg2 === 'paper') { 
                        return "REMIS";
                    } else if (arg2 === 'rock') {
                        return "WYGRANA";
                    }
                    break;
        return "BAD INPUT ZIOOOM!";
    }
}


weapon.question("Choose your weapon: rock, paper or scissors!", function(answer) {
    console.log(inputValidation(answer));
    const computerWeapon = chooseComputerWeapon();
    console.log("Your opponent has chosen: " + computerWeapon);
    console.log(computeWinner(answer, computerWeapon));
    weapon.close();

    process.stdin.destroy();
});