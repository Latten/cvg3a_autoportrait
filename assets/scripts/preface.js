var prefaceText = $('.prefaceText');
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
	$('.preface').hide(200);
	$('#app-container').show();
	tl.clear();
	clearInterval(startInterval );
	$('#preface-container').fadeTo(400, 0)
	$('#preface-container').hide(400) ; wait(500); followPlayerButton() ; setBackgroundColor(0); document.getElementById('app-container').scrollLeft = 0 ; gameContainerResize(); setRatioFromPhaser(); $('#game').fadeTo(0, 0); wait(700); SMPplay('mplayer01');
}