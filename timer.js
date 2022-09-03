let time = 10;


function countDown() {
    let contDown = setInterval(() => {
        time--;
        document.getElementById('timer').innerHTML = time;
        if (time == 0) {
            document.getElementById('gameOver').classList.add('game_over');
            document.getElementById('gameOver').innerHTML = 'GAME OVER'
            clearInterval(contDown);

        }
    }, 1000);


}