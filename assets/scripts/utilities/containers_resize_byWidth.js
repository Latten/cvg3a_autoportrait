var gameContainerResizeTimer = null ;
function gameContainerResize(){
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    var w = innerWidth;
    var h = innerHeight;
    var gameContainer = document.getElementById('game');
    var gameFramesContainerTop = document.getElementById('app-frames-top');
    var gameFramesContainerBottom = document.getElementById('app-frames-bottom');
    var getGameContainerWidth = gameContainer.clientWidth ;
    var getGameContainerHeight = gameContainer.clientHeight ;
//    var setGameContainerHeight = getGameContainerWidth * 1.25 ;
    var setGameContainerWidth = getGameContainerHeight * 6.67;
    if (getGameContainerWidth != setGameContainerWidth) {
        gameContainer.setAttribute('style', 'width: ' + setGameContainerWidth + 'px')
        gameContainer.style.width = setGameContainerWidth + ' px !important';
        gameFramesContainerTop.setAttribute('style', 'width: ' + setGameContainerWidth + 'px')
        gameFramesContainerTop.style.width = setGameContainerWidth + ' px !important';
        gameFramesContainerBottom.setAttribute('style', 'width: ' + setGameContainerWidth + 'px')
        gameFramesContainerBottom.style.width = setGameContainerWidth + ' px !important';
        //runSMPresizer();
    } else if (gameContainerResizeTimer != null) { wait(3); clearInterval(gameContainerResizeTimer) }
    
//    if (getGameContainerHeight != setGameContainerHeight) {
//        gameContainer.setAttribute('style', 'height: ' + setGameContainerHeight + 'px')
//        gameContainer.style.height = setGameContainerHeight + ' px !important';
//    }
};

function setCRtimer() {
    gameContainerResizeTimer = setInterval(gameContainerResize(), 100)
}

window.addEventListener("resize", setCRtimer)
     