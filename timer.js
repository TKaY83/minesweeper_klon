let time = 20;


function countDown() {
    let contDown = setInterval(() => {
        time--;
        document.getElementById('timer').innerHTML = time;
        if (time == 0) {
            gameOver();
            clearInterval(contDown);
        }
    }, 1000);
}

function resetTimer() {
    return time = 21;
}

function gameOver() {
    setTimeout(() => {
        document.getElementById('gameOver').classList.add('game_over');
        document.getElementById('gameOver').innerHTML = 'GAME OVER';
    }, 200);
}

function restart() {
    location.reload();
}