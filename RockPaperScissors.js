//Getting user's input:
var readline = require('readline');
var weapon = readline.createInterface(process.stdin, process.stdout, null);

//Function draws weapon for your oponent
const chooseComputerWeapon = () => {
    const randomNumber = Math.random();
    if (randomNumber < 0.33333) {
        return 'scissors';
    } else if (randomNumber < 0.66666) {
        return 'rock';
    }
    return 'paper';
}

//Function validates if user's input is correct
const inputValidation = (someInput) => {
    if ((someInput === 'rock') || (someInput === 'paper') || (someInput === 'scissors')) {
        return ("You have chosen: " + someInput);
    } else {
    return "Bad input!";
    }
}

//Function which handles game logic
const computeWinner = (userWeapon, computerWeapon) => {
    switch(userWeapon) {
        case "scissors":
                if (computerWeapon === 'scissors') { 
                    return "DRAW!";
                } else if (computerWeapon === 'paper') { 
                    return "YOU WIN!";
                } else if (computerWeapon === 'rock') {
                    return "COMPUTER WINS!";
                }
                break;            
        case "rock":
                if (computerWeapon === 'scissors') { 
                        return "YOU WIN!";
                    } else if (computerWeapon === 'paper') { 
                        return "COMPUTER WINS!";
                    } else if (computerWeapon === 'rock') {
                        return "DRAW!";
                    }
                    break;
        case "paper":
                    if (computerWeapon === 'scissors') { 
                        return "COMPUTER WINS!";
                    } else if (computerWeapon === 'paper') { 
                        return "DRAW!";
                    } else if (computerWeapon === 'rock') {
                        return "YOU WIN!";
                    }
                    break;
        return "BAD INPUT!!!";
    }
}

//The game starts here!
weapon.question("Choose your weapon: rock, paper or scissors: ", function(answer) {
    console.log(inputValidation(answer));
    const computerWeapon = chooseComputerWeapon();
    console.log("Your opponent has chosen: " + computerWeapon);
    console.log(computeWinner(answer, computerWeapon));
    weapon.close();

    process.stdin.destroy();
});