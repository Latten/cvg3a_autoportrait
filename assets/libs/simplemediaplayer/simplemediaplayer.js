function SMPplayPause(playerId) { 
    var SimpleMediaPlayer = document.getElementById(playerId);
    SimpleMediaPlayer = document.getElementById(playerId);
    if (SimpleMediaPlayer.paused) 
        SimpleMediaPlayer.play(); 
    else 
        SimpleMediaPlayer.pause(); 
} 

function SMPplay(playerId) {
    var SimpleMediaPlayer = document.getElementById(playerId);
    SimpleMediaPlayer = document.getElementById(playerId);
    if (SimpleMediaPlayer.paused) 
        SimpleMediaPlayer.play(); 
} 

function SMPpause(playerId) {
    var SimpleMediaPlayer = document.getElementById(playerId);
    SimpleMediaPlayer = document.getElementById(playerId);
    if (SimpleMediaPlayer.played)
        SimpleMediaPlayer.pause(); 
}
function SMPresize(playerId, width) {
    var SimpleMediaPlayer = document.getElementById(playerId);
    SimpleMediaPlayer = document.getElementById(playerId);
    SimpleMediaPlayer.width = width
}