var gameContainer = document.getElementById('game');
function gameContainerResize() {
    var getGameContainerWidth = parseInt(getComputedStyle(gameContainer).getPropertyValue('width')) ;
    var getGameContainerHeight = parseInt(getComputedStyle(gameContainer).getPropertyValue('height')) ;
    var setGameContainerHeight = getGameContainerWidth * 1.25 ;
    if (getGameContainerHeight != setGameContainerHeight) {
        gameContainer.setAttribute('style', 'height: ' + setGameContainerHeight + 'px')
        gameContainer.style.height = setGameContainerHeight + ' px !important';
    }
};
window.addEventListener("resize", function(){setInterval(gameContainerResize, 100);})