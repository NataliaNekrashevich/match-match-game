(function () {
    let startButton = document.querySelector('.start-game-button');
    
    startButton.addEventListener('click', startGameClicked);
    

    function startGameClicked() {
        let difficulty = document.querySelector('[name="game-difficulty"]:checked').value;
        let theme = document.querySelector('[name="card-back"]:checked').value;

        var game = new Game(theme, difficulty);
        game.start();
    }
})()