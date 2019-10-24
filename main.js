var ww = window.innerWidth;
var wh = window.innerHeight;  

var w = innerWidth;
var h = innerHeight;

var soundEnabled = !soundEnabled ;
var lastAudioPlayed = null ;

var idleDirection = 'down';

function wait(ms){
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
};

function random(min, max){
	return (Math.random() * (max - min)) + min;
};

function isScriptLoaded(src)
{
    return document.querySelector('script[src="' + src + '"]') ? true : false;
}

function muteAll() {
    soundEnabled ^= true ;
    if (soundEnabled == 0) {
        var soundsources = document.getElementsByTagName('audio');
        for(i=0; i<soundsources.length; i++) soundsources[i].pause();
        //animation off
        document.getElementsByClassName('muteAllButton')[0].textContent = "Enable sound";
    } else if (soundEnabled == 1 || soundEnabled == true) {
        if (lastAudioPlayed != null) {
            lastAudioPlayed.play();
        }
        //animation on
        document.getElementsByClassName('muteAllButton')[0].textContent = "Mute sound";
    }
}

function setBackgroundColor(setUp){
    //var body = document.getElementsByTagName("body")[1];
    //document.body.style.backgroundColor = color ;
    let root = document.documentElement;
    var backgroundColor = document.getElementById('backgroundColor');
    var backgroundColorContainer = document.getElementById("backgroundColor-container");
    var noiseblocks = document.querySelectorAll('.noiseblocks');
    var svgDynamics = document.querySelectorAll('.svgDynamic');
    //backgroundColor.classList.remove('horizTranslate')
    
    if (setUp == 0) {
        //var primaryColor = "#000000" ;
        primaryColor = "0x000000" ;
        //var colorAccentuation = "white" ;
        root.style.setProperty('--primary-color', "#000000") ;
        root.style.setProperty('--secondary-color', "#ffffff") ;
        backgroundColor.classList.remove('dark') ; 
        backgroundColorContainer.classList.remove('dark') ;
        for (var i = 0; i < noiseblocks.length; i++) {
            noiseblocks[i].classList.remove('dark');};
        for (var i = 0; i < svgDynamics.length; i++) {
            svgDynamics[i].classList.remove('dark');};
    }
    if (setUp == 1) {
        //var primaryColor = "#ffffff" ;
        primaryColor = "0xffffff" ;
        //var colorAccentuation = "black" ;
        root.style.setProperty('--primary-color', "#ffffff") ;
        root.style.setProperty('--secondary-color', "#000000") ;
        backgroundColor.classList.add('dark') ;
        backgroundColorContainer.classList.add('dark') ;

        for (var i = 0; i < noiseblocks.length; i++) {
            noiseblocks[i].classList.add('dark');};
        for (var i = 0; i < svgDynamics.length; i++) {
            svgDynamics[i].classList.add('dark');};
    }
}


//function updatePhaserFigLeafColor() {
//for(i=1; i<figLeaftRectTotal; i++) {
//    if (i <= 9)
//    {eval('thisGame.figLeaftRect_0' + i +'.' + primaryColor + ')')}
//    else if (i >= 10)
    {}

// fillStyle(color)
