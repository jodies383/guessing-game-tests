describe('The Guessing Game Function', function () {
    describe('should return messages based on what number the user has guessed', function () {
        it('Should return the message "Please enter a number between 1 and 100"', function () {
            let guessingGame = GuessingGame();
            guessingGame.newGame(800,16)
            assert.deepEqual(guessingGame.returnMessage(), ("Please enter a number between 1 and 100"));
        });
        it('Should return the message "Your guess is too high"', function () {
            let guessingGame = GuessingGame();
            guessingGame.newGame(80,16)
            assert.deepEqual(guessingGame.returnMessage(), ("Your guess is too high"));
        });
        it('Should return the message "Your guess is too low"', function () {
            let guessingGame = GuessingGame();
            guessingGame.newGame(8,16)
            assert.deepEqual(guessingGame.returnMessage(), ("Your guess is too low"));
        });
        it('Should return the messages "Correct, the secret number is 16" & "New game started"', function () {
            let guessingGame = GuessingGame();
            guessingGame.newGame(16,16)
            assert.deepEqual(guessingGame.returnMessage(), ("Correct, the secret number is 16!"));
            assert.deepEqual(guessingGame.returnNewGameMessage(), ("New game started"));
        });
        it('Should return the messages "Oh no! the number was 16" & "New game started"', function () {
            let guessingGame = GuessingGame();
            guessingGame.newGame(1,16)
            guessingGame.newGame(6,16)
            guessingGame.newGame(26,16)
            guessingGame.newGame(13,16)
            guessingGame.newGame(10,16)
            guessingGame.newGame(17,16)
            guessingGame.newGame(14,16)
            guessingGame.newGame(15,16)
            assert.deepEqual(guessingGame.returnMessage(), ("Oh no! the number was 16"));
            assert.deepEqual(guessingGame.returnNewGameMessage(), ("New game started"));
        });
    });
});
