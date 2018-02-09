var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

guessedLetters = [];

var guessesLeft = 9;

var wins = 0;
var losses = 0;

var updateGuessThisLetter = function () {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
}

document.onkeyup = function (event) {
    guessesLeft--;
    guessedLetters.push(layout);
    updateGuessesLeft();
    updateGuessesSoFar();

    if (letter === letterToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
    }
    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
    }
    var layout = 'undefined';
    $('#guessesSoFar').on('keypress keyup', function (event) {
        if (event.type == "keypress") {
            // set layout
            layout = 'en';
        } else {
            // use layout
            console.log(layout);
        }
    });

}

var updateGuessesLeft = function () {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
}

var updateGuessesSoFar = function () {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(",")
}

