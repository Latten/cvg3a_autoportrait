// Controls scripts
function playerMovementsCursors(playerId, playerspeed, twoAxis, blackout, releasetime){
    if (cursors.left.isDown)
    {
        //console.log("moveLeft"); 
        playerId.setVelocityX(-playerspeed * 2)
        scrollFollowPlayer(playerId);
        //wait(releasetime)
    }
    else if (cursors.right.isDown)
    {
        //console.log("moveight");
        playerId.setVelocityX(+playerspeed * 2)
        scrollFollowPlayer(playerId);
        //wait(releasetime)
    }
    else {
        playerId.setVelocityX(0)
    }
    if (cursors.up.isDown && twoAxis == true)
    {
        //console.log("moveUp");
        playerId.setVelocityY(-playerspeed * 2)
        //wait(releasetime)
    }
    else if (cursors.down.isDown && twoAxis == true)
    {
        //console.log("moveDown");
        playerId.setVelocityY(+playerspeed * 2)
        //wait(releasetime)
    }
    else {
        playerId.setVelocityY(0)
    };
    playerMovementsAnimation(playerId, playerspeed, true, blackout);
}


function setCollisionZone(collisionNumber, xyPosition, xySize, collisionObject) {
    eval('collisionZone_' + collisionNumber + ' = thisGame.add.zone(' + xyPosition + ').setSize(' + xySize + ').setOrigin(0,0)');
    eval('thisGame.physics.world.enable(collisionZone_' + collisionNumber + ', 1)');
    eval('thisGame.physics.add.collider(' + collisionObject + ', collisionZone_' + collisionNumber + ')');
    //debug
    if (debugEnable == true) {eval('collisionZone_' + collisionNumber + '.body.debugBodyColor = 0xff0000;')};
}

function setOverlapZone(overlapNumber, xyPosition, xySize, overlapObject, functionToCall) {
    eval('overlapZone_' + overlapNumber + ' = thisGame.add.zone(' + xyPosition + ').setSize(' + xySize + ').setOrigin(0,0)');
    eval('thisGame.physics.world.enable(overlapZone_' + overlapNumber + ', 1)');
    eval('thisGame.physics.add.overlap(' + overlapObject + ', overlapZone_' + overlapNumber + ', ' + functionToCall + ')');
    //debug
    if (debugEnable == true) {eval('overlapZone_' + overlapNumber + '.body.debugBodyColor = 0x00ff00;')};
}
function setZone(zoneNumber, xyPosition, xySize, overlapObject) {
    eval('aZone_' + zoneNumber + ' = thisGame.add.zone(' + xyPosition + ').setSize(' + xySize + ').setOrigin(0,0)');
    eval('thisGame.physics.world.enable(aZone_' + zoneNumber + ')');
}
//function setFigLeafRect(figLeafNumber, xyPosition, xySize) {
//    eval('var figLeafRect' + figLeafNumber + ' = thisGame.add.rectangle(' + xyPosition + ', ' + xySize + ', primaryColor).setOrigin(0,0)');
    //eval('thisGAme.figLeafRect_' + figLeafNumber +
//    figLeaftRectTotal = parseInt(figLeafNumber);
    //this.add.rectangle(1260, 600, 90, 570, primaryColor).setOrigin(0,0);

var moredepth = 1 ;

function setBorder(coloration) {
    moredepth ++ ;
    if (coloration == 0) {
        var primaryColor = 0x000000 ;
        borderShape01.lineStyle(4, 0x000000, 1)
    } else if (coloration == 1) {
        var primaryColor = 0xffffff ;
        borderShape01.lineStyle(4, 0xffffff, 1)
    }
    borderShape01.strokeRect(860, 120, 716, 1020).setDepth(moredepth);
    borderShape01.strokeRect(5900, 180, 1120, 780).setDepth(moredepth);
}