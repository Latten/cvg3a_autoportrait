var prefaceText = $('.prefaceText');
var splitPreface = new SplitText(prefaceText);
var splitSRC = "./assets/libs/gsap/SplitTextPlugin.obf2.min.js";

function prefaceAnimation() {
	//Play character fall
	// $('#prefaceCharacter').classList.add('fall') ;
    document.getElementById('fallingMan').classList.add('falling');
	if (isScriptLoaded(splitSRC) != false) {
		$(splitPreface.chars).each(function(i){
			TweenMax.to($(this), 1.0, {
				opacity: 0,
				x: random(-70, 70),
				y: random(400, 700),
				z: 0,
				scale: 1,
				delay: 0,
				yoyo: true,
				repeat: 0,
				repeatDelay: 0
			});
		});
	} else {$('.prefaceText').hide()};
	//Initiate webpage

	$('#preface-container').hide() ; $('#app-container').show(); SMPplay('mplayer01'); followPlayerButton() ; setBackgroundColor(0); document.getElementById('app-container').scrollLeft = 0 ; gameContainerResize(); setRatioFromPhaser(); $('#game').fadeTo(0, 0);
	
}