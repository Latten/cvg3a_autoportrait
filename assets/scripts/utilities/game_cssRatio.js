var ratioTimer = null;

var players = document.querySelectorAll('.players');

function setRatioTimer() {
    ratioTimer = setInterval(setRatioFromPhaser(), 150);
}
function setRatioFromPhaser() {
    gameContainer = document.getElementById('game');
    appContainer = document.getElementById('app-container');
    getGameContainerHeight = gameContainer.clientHeight ;
    gameDefaultHeight = 1200 ;
    if (appContainer.style.display != 'none') {
    ratioFromPhaser = getGameContainerHeight / gameDefaultHeight ;
    document.documentElement.style.setProperty('--ratio', ratioFromPhaser + "px");
    SMPresizeByPhaser();
    }
    else {
        document.documentElement.style.setProperty('--ratio', "1px")
    };
    if (ratioTimer != null) {
    wait(3);
    clearInterval(ratioTimer);}
}

window.addEventListener("resize", setRatioTimer)



function SMPresizeByPhaser() {
    var players = document.querySelectorAll('.players');
    for (var i = 0; i < players.length; i++) {
        playerContainer = players[i].parentElement.getBoundingClientRect() ;
        players[i].width = playerContainer.width - 4;}};