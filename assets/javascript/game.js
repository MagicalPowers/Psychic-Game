//hopefully this is helpful
var computerChoicez = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//empty div for later flex storage
var userChoicez = [];

//some divs for display elements
var winz = 0;
var lossez = 0;
var guessezzLeft = 9;
var guessed = [];


// i need a variable to keep track of something...
var letterToGuess = null;

//ok, computer choice time
//something, randome number generator, bounded by the length of the list, 26
var computerGuessz = computerChoicez[Math.floor(Math.random() * computerChoicez.length)];

//updating the html for the variables
function updateGL() {
    document.querySelector("#guessezLeft").innerHTML = "Hope Left: " + guessezzLeft;
};

//this function, i think i need it for later
function updateLetterToGuess() {
    this.letterToGuess = this.computerChoicez[Math.floor(Math.random() * this.computerChoices.length)];
};

//this will update the html to display the letter the user has tried, separated by , 
function updateGuessesSoFar() {
    document.querySelector('#letterz').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//this is a reset function that i will need to reset the game without refreshin the page
var reset = function () {
    guessezzLeft = 9;
    guessed = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

updateGL();
updateLetterToGuess();




//set a variable to a key press
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var checkOne = computerChoicez.includes(userGuess);
    var checkTwo = guessed.includes(userGuess);

    if (checkTwo === true) {
        return false;
    }
    else if (checkOne === false) {
        alert("Nope, try again.");
        return false;
    } else if (checkOne === true) {
        guessezzLeft--;
        guessed.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessezzLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                reset();
            }
        } else if (guessesLeft == 0) {
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            reset();

        }
        return false;
    }
    else {
        alert("Err0r");
    }


};

//wait how do i "increase the wins counter and start the game over again (without refreshing the page)"?


//i need to somehow update these HTML elements to display the current values
//var winzDiv = document.getElementById("winz");
//targetDiv.textContent = 0;

//var lossezDiv = document.getElementById("lossez");
//targetDiv.textContent = 0;

//var guessezDiv = document.getElementById("guessezLeft");
//targetDiv.textContent = 9;

//var letterzDiv = document.getElementById("letterz");
//targetDiv.textContent = 0;
