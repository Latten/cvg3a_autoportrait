var prefaceText = $('#prefaceText');
var prefaceAll = $('#preface');
function prefaceAnimation() {
	//Play character fall
	// $('#prefaceCharacter').classList.add('fall') ;
	document.getElementById('fallingMan').classList.add('falling');
	wait(500);
	$('#preface').hide(200);
	$('#preface-conatiner').hide(200);
	prefaceAll.style.setProperty('display', 'none')
	$('#app-container').show();
	tl.clear();
		clearInterval(startInterval );
		$('#preface-container').fadeTo(400, 0)
		$('#preface-container').hide(400) ;
		$('#preface').hide(400) ;
	wait(500); followPlayerButton() ; 
	setBackgroundColor(0); 
	document.getElementById('app-container').scrollLeft = 0 ; 
	$('#game').fadeTo(0, 0); wait(700); 
	gameContainerResize(); 
	setRatioFromPhaser(); SMPplay('mplayer01');
}