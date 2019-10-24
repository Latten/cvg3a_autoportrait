function frameToggle(frameNumber) {
    if (frameNumber == 1 && frameNumberDone01 == null) {
        frameNumberDone01 = true;
        console.log("toggle " + frameNumber);

        $('#video01').show();
        player01.visible = false;
        actualPlayer = null;
        player01.setVelocityX(0);
        $('#tooltip').hide();
        SMPplay("mplayer02");
    }
    if (frameNumber == 2 && frameNumberDone02 == null) {
        frameNumberDone02 = true;
        console.log("toggle " + frameNumber);

        setBackgroundColor(0); setBorder(0);
        scrollToObject(player02, true);
        player02move(1);
    }
    if (frameNumber == 3 && frameNumberDone03 == null) {
        frameNumberDone03 = true;
        console.log("toggle " + frameNumber);
        player02.anims.play('playerSide_O_still',true);
        actualPlayer = 02;
    }
    if (frameNumber == 4 && frameNumberDone04 == null) {
        frameNumberDone04 = true;
        console.log("toggle " + frameNumber);
        
        setBackgroundColor(1); setBorder(1);
        actualPlayer = null
        player02.setVelocityX(0);
        SMPplay("mplayer03");
    }
    if (frameNumber == 5 && frameNumberDone05 == null) {
        frameNumberDone05 = true;
        console.log("toggle " + frameNumber);

        setBackgroundColor(0); setBorder(0);
        player02move(2);
        scrollToObject(player02, true);
    }
    if (frameNumber == 6 && frameNumberDone06 == null) {
        frameNumberDone06 = true;
        player02.anims.play('playerSide_O_still',true);
        actualPlayer = 02
    }
    if (frameNumber == 7 && frameNumberDone07 == null) {
        frameNumberDone07 = true;
        $('#video04').show();
        player02.visible = false;
        actualPlayer = null
        document.getElementById("video04").classList.add('move')
        SMPplay("mplayer04");
        if (followPlayer == 'true') {
            document.getElementById("app-container").scrollLeft = parseInt (4270 * ratioFromPhaser)};
    }
    if (frameNumber == 8 && frameNumberDone08 == null) {
        frameNumberDone08 = true;
        SMPplay("mplayer05");
    }
    if (frameNumber == 9 && frameNumberDone09 == null) {
        frameNumberDone09 = true;
        setBackgroundColor(1); setBorder(1);
        player03move(1);
    }
    if (frameNumber == 10 && frameNumberDone10 == null) {
        frameNumberDone10 = true;
        player03.setVelocityX(0);
        player03.anims.play('playerSide_B_still',true);
        setCollisionZone("06", "5900, 680", "20, 200", "player03");
        actualPlayer = 03;
    }
    if (frameNumber == 11 && frameNumberDone11 == null) {
        frameNumberDone11 = true;
        document.getElementById("video06").classList.add('move')
        SMPplay("mplayer06");
        setBackgroundColor(0); setBorder(0);
        actualPlayer = null;
    }
    if (frameNumber == 12 && frameNumberDone12 == null) {
        frameNumberDone12 = true;
        player03.visible = false;
        document.getElementById('backgroundColor').classList.add('end');
        document.getElementById('backgroundColor-container').classList.add('end');
        $('#app-container').hide()
        $(".endText").show();
        game.pause()
    }
}