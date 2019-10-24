function SPVplayPause(p1) { 
    var SimpleVideoPlayer = document.getElementById(p1);
    if (SimpleVideoPlayer.paused) 
        SimpleVideoPlayer.play(); 
    else 
        SimpleVideoPlayer.pause(); 
} 

function SPVplay(p1) {
    var SimpleVideoPlayer = document.getElementById(p1);
    if (SimpleVideoPlayer.paused) 
        SimpleVideoPlayer.play(); 
} 

function SPVpause(p1) {
    var SimpleVideoPlayer = document.getElementById(p1);
    if (SimpleVideoPlayer.played)
        SimpleVideoPlayer.pause(); 
}