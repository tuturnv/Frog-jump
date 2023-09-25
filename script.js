score = 0;
cross = true;

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        frog = document.querySelector('.frog');
        frog.classList.add('animatefrog');
        setTimeout(() => {
            frog.classList.remove('animatefrog')
        }, 700);
    }
    if (e.keyCode == 39) {
        frog = document.querySelector('.frog');
        frogX = parseInt(window.getComputedStyle(frog, null).getPropertyValue('left'));
        frog.style.left = frogX + 112 + "px";
    }
    if (e.keyCode == 37) {
        frog = document.querySelector('.frog');
        frogX = parseInt(window.getComputedStyle(frog, null).getPropertyValue('left'));
        frog.style.left = (frogX - 112) + "px";
    }
}

setInterval(() => {
    frog = document.querySelector('.frog');
    gameover = document.querySelector('.gameover');
    snake = document.querySelector('.snake');

    dx = parseInt(window.getComputedStyle(frog, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(frog, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(snake, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(snake, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameover.innerHTML = "Game Over - Reload to Play Again"
        snake.classList.remove('snakeAni')
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(snake, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            snake.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scorecount.innerHTML = "Your Score: " + score
}