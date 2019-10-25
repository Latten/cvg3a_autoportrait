var prefaceText = $('#prefaceText');
var prefaceAll = $('#preface');
function prefaceAnimation() {
	//Play character fall
	// $('#prefaceCharacter').classList.add('fall') ;
	document.getElementById('fallingMan').classList.add('falling');
	wait(500);
	$('#preface').hide(2000);
	$('#preface-container').hide(2000);
	$('#app-container').show();
	wait(500); 
	followPlayerButton() ; 
	setBackgroundColor(0); 
	document.getElementById('app-container').scrollLeft = 0 ; 
	$('#game').fadeTo(0, 0.0); wait(700); 
	gameContainerResize(); 
	setRatioFromPhaser(); 
	SMPplay('mplayer01');
}