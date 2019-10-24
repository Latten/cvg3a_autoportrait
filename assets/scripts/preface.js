var prefaceText = $('.prefaceText');
var splitPreface = new SplitText(prefaceText);
var splitSRC = "https://glot.io/snippets/fh7g6g06qt/raw";
var startThatGame = false;
var oneTime = false;
var tl = new TimelineMax({
	delay: 0,
	yoyo: false,
	repeat: 0,
	repeatDelay: 0,
})

function prefaceAnimation() {
	//Play character fall
	// $('#prefaceCharacter').classList.add('fall') ;
    document.getElementById('fallingMan').classList.add('falling');
	if (isScriptLoaded(splitSRC) != false) {
		$(splitPreface.chars).each(function(i){
			tl.to($(this), 3.0, {
				opacity: 0,
				x: random(-70, 70),
				y: random(400, 700),
				z: 0,
				scale: 1,
				onComplete: function() {startThatGame = true ; var startInterval = setInterval(initiateGame(), 500) ;},
			});
		});
	} else {$('.prefaceText').hide()};
}
	//Initiate webpage
	
function initiateGame() {
	console.log("log");
	if (startThatGame != false && oneTime == false) {
		oneTime = true ;
		$('#app-container').show();
		tl.clear();
		clearInterval(startInterval );
		$('#preface-container').fadeTo(400, 0)
		$('#preface-container').hide(400) ; wait(500); followPlayerButton() ; setBackgroundColor(0); document.getElementById('app-container').scrollLeft = 0 ; gameContainerResize(); setRatioFromPhaser(); $('#game').fadeTo(0, 0); wait(700); SMPplay('mplayer01');
	};
}
var startInterval = setInterval(initiateGame(), 500);