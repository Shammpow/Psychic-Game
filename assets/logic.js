var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

guessedLetters = [];

var guessesLeft = 9;

var wins = 0;
var losses = 0;

var letterToGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(letterToGuess);



document.onkeyup = function (event) {
    guessesLeft--;
    guessedLetters.push(event.key);
    console.log(guessedLetters)
    updateGuessesLeft();
    updateGuessesSoFar(guessedLetters);


    var letter = event.key
    if (letter === letterToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        resetGame();
    }
    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
    }



}

var updateGuessesLeft = function () {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
}

var updateGuessesSoFar = function (guessedLetters) {
    document.querySelector("#guessesSoFar").innerHTML = guessedLetters.join(" ,")
}

// Can't figure out how to get the game to reset after a win.
// The idea is to reset the guesses counter as well as wipe the array, without refreshing the browser.
// Ideally I want to still keep the wins and losses counters.