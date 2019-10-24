var scrollInfo = document.getElementById("scrollInfo");
    scrollInfo.disabled = true;
    scrollInfo.value = 0;

var scroller = document.getElementById("scroller");
    scroller.disabled = false;
    scroller.value = 50;
var mouseScroller = 'false'
var smoothScroll = true ;
var globalPlayerId = null

function scrollerMove() {
    var scroller = document.getElementById("scroller") ;
    var scrollerSpeed = parseInt(scroller.value) ;
    var appContainer = document.getElementById("app-container"); 
    if (mouseScroller == 'true') {
        appContainer.style.setProperty('scroll-behavior', 'auto');
        if (scrollerSpeed >=0 && scrollerSpeed <= 10)
            {scrollerMoveLeft(140)}
        if (scrollerSpeed >=11 && scrollerSpeed <= 30)
            {scrollerMoveLeft(80)}
        if (scrollerSpeed >=31 && scrollerSpeed <= 40)
            {scrollerMoveLeft(45)}
        if (scrollerSpeed >=41 && scrollerSpeed <= 48)
            {scrollerMoveLeft(12)}


        if (scrollerSpeed >=52 && scrollerSpeed <= 59)
            {scrollerMoveRight(12)}
        if (scrollerSpeed >=60 && scrollerSpeed <= 69)
            {scrollerMoveRight(45)}
        if (scrollerSpeed >=70&& scrollerSpeed <= 89)
            {scrollerMoveRight(80)}
        if (scrollerSpeed >=90 && scrollerSpeed <= 100)
            {scrollerMoveRight(140)};
    }
    else if (scroller.value != 50) {
        appContainer.style.setProperty('scroll-behavior', 'smooth');
        scroller.value = 50;
        clearInterval(scrollerRepeater)
    };
}

function scrollerMoveLeft(speed) {
    var appContainer = document.getElementById("app-container");
    appContainer.scrollLeft = appContainer.scrollLeft - speed;
}
function scrollerMoveRight(speed) {
    var appContainer = document.getElementById("app-container");
    appContainer.scrollLeft = appContainer.scrollLeft + speed;;
}

  function setScrollInfo() {
    var appContainer = document.getElementById("app-container");
    var appContainerLeft = appContainer.scrollLeft ;
    var appContainerMaxLeftFull = appContainer.scrollWidth ;
    var getGameContainerWidth = parseInt(getComputedStyle(appContainer).getPropertyValue('width')) ;
    var appContainerMaxLeft = appContainerMaxLeftFull - getGameContainerWidth ;
    var dataScrollInfo = (appContainerLeft / appContainerMaxLeft) * 100 ;

    var scrollInfo = document.getElementById("scrollInfo");
    scrollInfo.disabled = true;
    scrollInfo.value = dataScrollInfo;
  }

function mouseDownScroller() {
    scrollerRepeater = setInterval(scrollerMove, 20) ;
    mouseScroller = 'true' ;
    followPlayer = 'false' ;
    $('.followPlayerButton').show();
}

function mouseUpScroller() {
    mouseScroller = 'false' ;
}

//setInterval(scrollerMove, 70);
//setInterval(setScrollInfo, 100);

function scrollFollowPlayer(playerId) {
    if (playerId != null){
        globalPlayerId = playerId ;
        if (followPlayer == 'true') {
            appContainer = document.getElementById("app-container");
            appContainer.scrollLeft = (playerId.x * ratioFromPhaser) - (window.innerWidth/2);
            if (smoothScroll != false) {
                smoothScroll = false ;
                appContainer.style.setProperty('scroll-behavior', 'auto');
            } else if (smoothScroll != true) {
                smoothScroll = true ;
                appContainer.style.setProperty('scroll-behavior', 'smooth');
            };
        }
        else { followPlayer = 'false' };
    }
}
function followPlayerButton() {
    followPlayer = 'true';
    $('.followPlayerButton').hide();
    if (globalPlayerId != null) {
        document.getElementById("app-container").style.setProperty('scroll-behavior', 'smooth');
        document.getElementById("app-container").scrollLeft = (globalPlayerId.x * ratioFromPhaser) - (window.innerWidth/2);}
}


function scrollToObject(objectId, isPhaser) {
    appContainer = document.getElementById("app-container");
    appContainer.style.setProperty('scroll-behavior', 'smooth');
    if (isPhaser != true) {
    scrollToObjectCoord = document.getElementById(objectId).getBoundingClientRect() ;
    document.getElementById("app-container").scrollLeft = parseInt((scrollToObjectCoord.left+scrollToObjectCoord.right)/2) - (window.innerWidth/2);
    }
    else if (isPhaser = true) {
    document.getElementById("app-container").scrollLeft = (objectId.x * ratioFromPhaser) - (window.innerWidth/2);
    }
}